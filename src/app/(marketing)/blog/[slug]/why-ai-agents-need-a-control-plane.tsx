export default function WhyAiAgentsNeedAControlPlane(): React.ReactNode {
  return (
    <>
      {/* ── Introduction ── */}
      <p>
        The AI agent ecosystem exploded in 2025. Over 10,000 MCP servers were
        published. Anthropic&apos;s SDK alone surpassed 97 million monthly
        downloads. Every major platform adopted the Model Context Protocol:
        Claude, ChatGPT, Gemini, Copilot, Cursor, VS Code. In December 2025,
        Anthropic donated MCP to the Linux Foundation. The protocol won.
      </p>

      <p>
        But there is a widening gap between &ldquo;agents work in demos&rdquo;
        and &ldquo;agents work in production.&rdquo; According to industry
        surveys, only <strong>11% of organizations</strong> have AI agents
        running in actual production environments. The bottleneck is not model
        intelligence &mdash; GPT-4o, Claude Opus, and Gemini Ultra are all
        remarkably capable. The bottleneck is infrastructure.
      </p>

      <p>
        Specifically, the lack of a <strong>control plane</strong> for the three
        things every production agent needs: managed tool connections, reusable
        skills, and secure execution environments. Without that control plane,
        organizations are flying blind &mdash; deploying agents with no
        governance, no audit trail, and no kill switch.
      </p>

      {/* ── Section 1 ── */}
      <h2>What Every AI Agent Needs</h2>

      <p>
        Anthropic&apos;s research has mapped the anatomy of effective agents
        with increasing precision. In{" "}
        <a
          href="https://www.anthropic.com/research/building-effective-agents"
          target="_blank"
          rel="noopener noreferrer"
        >
          &ldquo;Building Effective Agents&rdquo;
        </a>{" "}
        (December 2024), they identified three foundational capabilities:
        retrieval, tools, and memory. Agents that can search knowledge bases,
        invoke external APIs, and maintain context across interactions
        outperform those that rely on raw model intelligence alone.
      </p>

      <p>
        In{" "}
        <a
          href="https://www.anthropic.com/engineering/code-execution-with-mcp"
          target="_blank"
          rel="noopener noreferrer"
        >
          &ldquo;Code Execution with MCP&rdquo;
        </a>{" "}
        (2025), they went further: agents that write and execute code instead of
        calling tools directly achieve <strong>98.7% token savings</strong> on
        complex tasks. And in &ldquo;Agent Skills&rdquo; (December 2025), they
        introduced modular skill packages with progressive disclosure &mdash;
        reusable SKILL.md files that teach agents new capabilities without
        retraining.
      </p>

      <p>
        These findings converge on three pillars that every production agent
        system requires:
      </p>

      <ul>
        <li>
          <strong>MCP Servers</strong> &mdash; standardized tool connections
          that expose tools, resources, and prompts through a single protocol.
          This is how agents interact with databases, APIs, file systems, and
          external services.
        </li>
        <li>
          <strong>Skills</strong> &mdash; procedural knowledge packages
          (SKILL.md files) that encode multi-step workflows as reusable modules.
          Skills give agents domain expertise without prompt engineering
          gymnastics.
        </li>
        <li>
          <strong>Sandboxes</strong> &mdash; secure, isolated code execution
          environments where agents can write, run, and iterate on code without
          risking the host system. This is the 98.7% token savings path.
        </li>
      </ul>

      <p>
        Each pillar is powerful on its own. Together, they define what a
        production-ready agent platform looks like. The question is: who manages
        them?
      </p>

      {/* ── Section 2 ── */}
      <h2>The Shadow AI Problem</h2>

      <p>
        Without governance, agent infrastructure becomes Shadow AI &mdash;
        unmanaged, unmonitored, and unaccountable. The statistics are stark:
      </p>

      <ul>
        <li>
          <strong>98%</strong> of organizations have employees using
          unsanctioned AI tools (Programs.com)
        </li>
        <li>
          <strong>91%</strong> of AI tools in enterprises remain unmanaged
          (Reco.ai, 2025)
        </li>
        <li>
          <strong>53%</strong> of MCP servers use insecure static API keys
          (Astrix Security, 2025 &mdash; analysis of 20,000 MCP server
          implementations)
        </li>
        <li>
          <strong>79%</strong> of MCP servers pass credentials via environment
          variables with no rotation or vault integration (Astrix Security)
        </li>
        <li>
          Shadow AI breaches cost <strong>$670K more</strong> on average than
          standard breaches (IBM, 2025)
        </li>
        <li>
          <strong>40%</strong> of organizations will face a shadow AI security
          incident by 2030 (Gartner)
        </li>
        <li>
          <strong>63%</strong> of organizations lack any AI governance policies
          whatsoever (Programs.com)
        </li>
      </ul>

      <p>
        Mend.io coined the term{" "}
        <a
          href="https://www.mend.io/blog/shadow-mcp-unauthorized-ai-connectivity-in-your-codebase/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &ldquo;Shadow MCP&rdquo;
        </a>{" "}
        to describe unauthorized MCP server connections embedded in enterprise
        codebases &mdash; connections that bypass security policies, exfiltrate
        data through tool calls, and persist undetected across deployments. When
        every developer can spin up an MCP server in five minutes, the attack
        surface grows faster than any security team can audit manually.
      </p>

      <p>
        Regulators are responding. NIST launched the{" "}
        <a
          href="https://www.nist.gov/news-events/news/2026/02/announcing-ai-agent-standards-initiative-interoperable-and-secure"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI Agent Standards Initiative
        </a>{" "}
        in February 2026, establishing interoperability and security benchmarks
        for agentic systems. The EU AI Act enforcement begins August 2026, with
        specific provisions for autonomous AI systems. Organizations without
        governance infrastructure will not just face security risks &mdash; they
        will face regulatory consequences.
      </p>

      {/* ── Section 3 ── */}
      <h2>Why a Gateway &mdash; Not Just Policies</h2>

      <p>
        Policies don&apos;t enforce themselves. A PDF in your compliance folder
        does not prevent an engineer from connecting an unvetted MCP server to a
        production agent at 2 AM. You need infrastructure that makes the{" "}
        <strong>secure path the easy path</strong>.
      </p>

      <p>
        This is the MCP Gateway pattern: a centralized control plane that sits
        between your agents and the servers, skills, and sandboxes they consume.
        Every request passes through the gateway. Every connection is
        authenticated, authorized, logged, and rate-limited by default.
      </p>

      <p>What a gateway provides:</p>

      <ul>
        <li>
          <strong>Authentication &amp; Authorization</strong> &mdash; OAuth 2.1
          with PKCE, SSO integration via SAML/OIDC, and role-based access
          control. No more static API keys in environment variables.
        </li>
        <li>
          <strong>Server Catalog</strong> &mdash; a registry of approved MCP
          servers. Agents can only connect to servers in the catalog.
          Unauthorized connections are blocked at the network level, not the
          policy level.
        </li>
        <li>
          <strong>Policy Enforcement</strong> &mdash; rate limits per agent, per
          tool, and per user. Budget constraints that prevent runaway costs.
          Content filtering rules that redact sensitive data before it reaches
          external services.
        </li>
        <li>
          <strong>Audit Trails</strong> &mdash; complete, immutable logging of
          every tool invocation, every skill execution, every sandbox session.
          When compliance asks &ldquo;what did this agent do on Tuesday?&rdquo;
          you have the answer in seconds.
        </li>
        <li>
          <strong>Observability</strong> &mdash; structured logging, latency
          metrics, error rates, token consumption, and cost tracking across
          every agent in your organization. One dashboard, not fifty.
        </li>
      </ul>

      <p>
        This is not a novel pattern. It is the same architectural approach that
        won in API management (Kong, Apigee), service mesh (Istio, Linkerd), and
        cloud networking (AWS VPC, Azure VNet). Every time a new class of
        distributed service emerges, organizations eventually need a control
        plane to manage it. Agent infrastructure is following the same arc.
      </p>

      {/* ── Section 4 ── */}
      <h2>What MCP Gateway Provides</h2>

      <p>
        MCP Gateway manages all three pillars through a single platform.
        Register MCP servers in a curated catalog. Package and distribute skills
        as versioned modules. Provision sandboxes with fine-grained resource
        limits and network policies. Everything is managed through one control
        plane with a unified API.
      </p>

      <p>
        The platform is API-first with a full REST API, so it integrates with
        any agent framework: LangChain, CrewAI, OpenAI Agents SDK, Google ADK,
        Anthropic&apos;s Claude SDK, or your own custom orchestration layer. If
        your framework can make HTTP requests, it can use MCP Gateway.
      </p>

      <p>
        MCP Gateway is source-available under the Functional Source License
        (FSL). You deploy it on your own infrastructure. You audit every line of
        code. Your data never leaves your network. This is not a SaaS platform
        that holds your agent traffic hostage &mdash; it is infrastructure you
        own and operate.
      </p>

      <p>
        MCP Gateway is coming soon to the AWS Marketplace, Azure Marketplace,
        GCP Marketplace, and Red Hat OpenShift catalog. Check out the source on{" "}
        <a
          href="https://github.com/Kinetic-Solutions-Group/mcpgateway"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>

      {/* ── Closing ── */}
      <h2>The Time to Build Is Now</h2>

      <p>
        The agent ecosystem is moving fast &mdash; faster than most
        organizations&apos; governance can keep up. Shadow AI is not a
        theoretical risk; it is a measurable, growing liability. The companies
        that will succeed with AI agents in production are the ones investing in
        infrastructure now, not after the first breach, the first compliance
        failure, or the first six-figure incident response bill.
      </p>

      <p>
        MCP Gateway gives your organization the control plane to deploy agents
        with confidence &mdash; managing MCP servers, skills, and sandboxes
        through one platform, with the authentication, authorization, audit
        trails, and observability that production demands.
      </p>
    </>
  );
}
