"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Github, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/mcp-servers", label: "MCP Servers" },
  { href: "/skills", label: "Skills" },
  { href: "/sandboxes", label: "Sandboxes" },
  { href: "/observability", label: "Observability" },
  { href: "/#deploy", label: "Deploy" },
  { href: "/blog", label: "Blog" },
] as const;

export function Navbar(): React.ReactNode {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="glass border-b border-border/50">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-80"
          >
            <Image
              src="/logo-light-transparent.png"
              alt="MCP Gateway"
              width={200}
              height={62}
              className="h-14 w-auto invert hue-rotate-180"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3.5 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" size="sm" asChild>
              <Link
                href="https://github.com/Kinetic-Solutions-Group/mcpgateway"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-1.5 size-4" />
                GitHub
              </Link>
            </Button>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link href="/#deploy">Deploy</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors duration-200 hover:text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "glass border-b border-border/50 md:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <div className="space-y-1 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-4">
            <Button variant="ghost" size="sm" className="flex-1" asChild>
              <Link
                href="https://github.com/Kinetic-Solutions-Group/mcpgateway"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-1.5 size-4" />
                GitHub
              </Link>
            </Button>
            <Button
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              size="sm"
              asChild
            >
              <Link href="/#deploy" onClick={() => setMobileOpen(false)}>
                Deploy
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
