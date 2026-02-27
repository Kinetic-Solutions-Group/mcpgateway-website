"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/*  Option B: WebGL Shader Gradient (Stripe-style flowing mesh)        */
/*  Organic color blobs that morph in real time using GLSL shaders     */
/* ------------------------------------------------------------------ */

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // Simplex noise functions
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;

    // Create multiple layers of noise at different scales
    float noise1 = snoise(uv * 2.0 + uTime * 0.05) * 0.5 + 0.5;
    float noise2 = snoise(uv * 3.0 - uTime * 0.03 + 10.0) * 0.5 + 0.5;
    float noise3 = snoise(uv * 1.5 + uTime * 0.04 + 20.0) * 0.5 + 0.5;

    // MCP Gateway colors — deep navy background with coral accents
    vec3 bgColor = vec3(0.067, 0.067, 0.11);       // Deep navy (#111118)
    vec3 coralColor = vec3(0.875, 0.498, 0.412);    // Coral (#df7f69)
    vec3 coralDark = vec3(0.769, 0.376, 0.29);      // Darker coral (#c4604a)
    vec3 blueGlow = vec3(0.22, 0.35, 0.55);         // Muted blue accent

    // Blend noise layers with colors
    vec3 color = bgColor;

    // Coral blob — primary accent, slow drift
    float coralMask = smoothstep(0.55, 0.75, noise1);
    color = mix(color, coralColor, coralMask * 0.12);

    // Darker coral blob — secondary, different movement
    float coral2Mask = smoothstep(0.5, 0.7, noise2);
    color = mix(color, coralDark, coral2Mask * 0.08);

    // Blue accent — subtle cool counterpoint
    float blueMask = smoothstep(0.6, 0.8, noise3);
    color = mix(color, blueGlow, blueMask * 0.06);

    // Vignette — fade to background at edges
    float vignette = 1.0 - smoothstep(0.2, 0.8, length(uv - 0.5) * 1.4);
    color = mix(bgColor, color, vignette);

    gl_FragColor = vec4(color, 1.0);
  }
`;

function ShaderPlane(): React.ReactNode {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
    }),
    [],
  );

  useFrame((_state, delta) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value += delta;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export function ShaderBackground(): React.ReactNode {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ width: "100%", height: "100%" }}
        gl={{ antialias: false, alpha: false }}
        dpr={[1, 1.5]}
      >
        <ShaderPlane />
      </Canvas>

      {/* Subtle radial fade so content reads well */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--background)_75%)]" />
    </div>
  );
}
