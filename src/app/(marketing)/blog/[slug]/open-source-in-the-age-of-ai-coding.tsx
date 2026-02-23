export default function OpenSourceInTheAgeOfAiCoding(): React.ReactNode {
  return (
    <>
      {/* Introduction */}
      <p>
        When we started building MCP Gateway, &ldquo;open source&rdquo; seemed
        like the obvious choice. It&rsquo;s the default for developer
        infrastructure. It builds trust, drives adoption, creates community.
        Every successful infrastructure company &mdash; Kong, Grafana, Supabase,
        PostHog &mdash; is built on open source.
      </p>
      <p>
        But 2025&ndash;2026 changed the equation. AI coding tools (Claude Code,
        GitHub Copilot, Cursor) made it trivially easy to point at a GitHub repo
        and recreate the entire product in days. We had to ask ourselves: in a
        world where code is free, what&rsquo;s actually worth protecting?
      </p>

      {/* Section 1 */}
      <h2>The State of Open Source in 2026</h2>

      <p>
        <strong>Tailwind&rsquo;s revenue collapse.</strong> Tailwind CSS has{" "}
        <strong>30M+ weekly npm downloads</strong> and is growing faster than
        ever. Revenue is <strong>down 80%</strong>. Documentation traffic
        dropped 40% since 2023 &mdash; developers ask AI instead of reading
        docs. Creator Adam Wathan laid off 75% of engineering.
      </p>
      <blockquote>
        <p>
          &ldquo;Right now there&rsquo;s just no correlation between making
          Tailwind easier to use and making development of the framework more
          sustainable.&rdquo;
        </p>
      </blockquote>
      <p>
        <a
          href="https://the-decoder.com/tailwinds-shattered-business-model-is-a-grim-warning-for-every-business-relying-on-site-visits-in-the-ai-era/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more at The Decoder
        </a>
      </p>

      <p>
        <strong>Maintainer burnout.</strong> Mitchell Hashimoto
        (HashiCorp/Ghostty founder) created &ldquo;Vouch&rdquo; &mdash; a trust
        system for contributors &mdash; after AI-generated PRs went from rare to{" "}
        <strong>50% of all submissions</strong>. Daniel Stenberg shut down
        curl&rsquo;s 6-year, $86K bug bounty after AI submissions collapsed
        genuine vulnerability discovery below 5%.{" "}
        <a
          href="https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Stenberg&rsquo;s post
        </a>
      </p>

      <p>
        <strong>The academic research.</strong> Koren et al. (2026) found that
        AI tools install dependencies &ldquo;in a way that comes between
        developers and maintainers, undermining interactions that potentially
        return value to those doing the work.&rdquo; Stack Overflow question
        volume dropped sharply after ChatGPT launched.{" "}
        <a
          href="https://www.theregister.com/2026/01/26/vibe_coding_hazardous_open_source/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the analysis at The Register
        </a>
      </p>

      <p>
        <strong>The economic asymmetry.</strong> It takes a developer 60 seconds
        to prompt an agent to fix typos. It takes a maintainer an hour to
        carefully review those changes. PR volumes jumped <strong>40%</strong>{" "}
        while merge rates declined. As Matt Asay wrote:
      </p>
      <blockquote>
        <p>
          &ldquo;The future of open source is smaller, quieter, and much more
          exclusive.&rdquo;
        </p>
      </blockquote>
      <p>
        <a
          href="https://www.infoworld.com/article/4129056/is-ai-killing-open-source.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Asay&rsquo;s article at InfoWorld
        </a>
      </p>

      {/* Section 2 */}
      <h2>Code Is No Longer a Moat</h2>

      <p>
        The cost of producing code is approaching zero. As Keon Kim puts it,{" "}
        <a
          href="https://keon.kim/writing/cost-of-code-is-going-to-zero"
          target="_blank"
          rel="noopener noreferrer"
        >
          &ldquo;AI is doing to coding what the internet did to
          distribution.&rdquo;
        </a>{" "}
        When anyone can generate a working prototype in a weekend,{" "}
        <strong>25% of YC&rsquo;s current cohort</strong> have nearly
        AI-generated codebases (
        <a
          href="https://techcrunch.com/2025/03/06/a-quarter-of-startups-in-ycs-current-cohort-have-codebases-that-are-almost-entirely-ai-generated/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TechCrunch
        </a>
        ). Code itself is no longer a differentiator.
      </p>

      <p>
        a16z&rsquo;s{" "}
        <a
          href="https://a16z.com/context-is-king/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &ldquo;Context is King&rdquo;
        </a>{" "}
        essay captures the shift perfectly:
      </p>
      <blockquote>
        <p>
          &ldquo;That kind of judgment can&rsquo;t be automated like code. It
          varies dramatically by domain and is earned only through
          experience.&rdquo;
        </p>
      </blockquote>

      <p>
        NFX&rsquo;s research on{" "}
        <a
          href="https://www.nfx.com/post/ai-defensibility"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI defensibility
        </a>{" "}
        confirms that network effects, community trust, and workflow lock-in are
        the new moats. If code is free, what&rsquo;s defensible?
      </p>

      <p>The new moat hierarchy:</p>
      <ol>
        <li>
          <strong>Distribution</strong> &mdash; being where developers already
          are (marketplaces, certifications)
        </li>
        <li>
          <strong>Community trust</strong> &mdash; takes years to build, seconds
          to lose
        </li>
        <li>
          <strong>Workflow lock-in</strong> &mdash; once data flows through you,
          switching is painful
        </li>
        <li>
          <strong>Operational excellence</strong> &mdash; running infrastructure
          is harder than writing it
        </li>
      </ol>

      {/* Section 3 */}
      <h2>What We Learned from Kong, Grafana, and Sentry</h2>

      <p>
        Three models that work in 2026. Each gives away the runtime and sells
        the management layer.
      </p>

      <p>
        <strong>Kong:</strong> Apache 2.0 gateway (free forever) + commercial
        control plane (Konnect). <strong>$50K+/yr enterprise contracts</strong>.
        The gateway is the distribution; the management layer is the revenue.
      </p>

      <p>
        <strong>Grafana:</strong> AGPL core + Grafana Cloud (consumption-based).{" "}
        <strong>$400M ARR</strong>. <strong>70% of Fortune 50</strong> use it.
        Open source visualization drives adoption; managed cloud and enterprise
        plugins drive revenue.
      </p>

      <p>
        <strong>Sentry:</strong> Created the Functional Source License (FSL).
        All code is visible on GitHub. It prevents competitors from offering a
        competing hosted service. After 2 years, each version automatically
        converts to Apache 2.0.
      </p>

      <p>
        The pattern is clear:{" "}
        <strong>
          give away the runtime, sell the management layer and operational
          excellence.
        </strong>
      </p>

      {/* Section 4 */}
      <h2>Our Decision: FSL + Apache 2.0</h2>

      <p>
        We chose the{" "}
        <a
          href="https://blog.sentry.io/introducing-the-functional-source-license-freedom-without-free-riding/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Functional Source License (FSL-2.0)
        </a>{" "}
        for MCP Gateway&rsquo;s core, the license created by Sentry.
        Here&rsquo;s why.
      </p>

      <p>
        <strong>What it allows:</strong> Download, run, modify, deploy for any
        non-competing purpose &mdash; free. You can run MCP Gateway in
        production, modify it for your needs, and contribute back. No
        restrictions on internal use.
      </p>

      <p>
        <strong>What it prevents:</strong> Competitors cannot take our code and
        sell a competing hosted MCP gateway service. That&rsquo;s it. One
        restriction.
      </p>

      <p>
        <strong>What happens after 2 years:</strong> Each version automatically
        becomes Apache 2.0 &mdash; fully open source. No rug pull. No bait and
        switch. Just a two-year head start.
      </p>

      <p>
        <strong>Why not BSL:</strong> The Business Source License requires a
        custom &ldquo;Additional Use Grant&rdquo; per company &mdash; enterprise
        legal teams must review each variant individually. FSL is standardized.
        One license, one set of terms, no per-vendor legal review.
      </p>

      <p>
        <strong>Why not AGPL:</strong> Google has a company-wide ban on AGPL.
        Many enterprises have similar blanket bans. AGPL&rsquo;s viral boundary
        is ambiguous &mdash; does calling an AGPL service over HTTP trigger
        copyleft? Nobody wants to litigate that question.
      </p>

      <p>
        <strong>Why not fully open (MIT/Apache 2.0):</strong> Because IBM,
        Microsoft, Docker, and Cloudflare are all building free MCP gateways
        already. We can&rsquo;t out-code trillion-dollar companies. We need to
        protect our ability to build a business.
      </p>

      <p>
        Our SDKs (Python, Node, Go) are Apache 2.0 &mdash; developers should
        never worry about license restrictions when importing an SDK. The
        licensing boundary is clear: the gateway runtime is FSL, everything you
        integrate with is Apache 2.0.
      </p>

      <p>
        For more on source-available licensing strategies, see{" "}
        <a
          href="https://www.getdbt.com/blog/licensing-dbt"
          target="_blank"
          rel="noopener noreferrer"
        >
          dbt Labs&rsquo; licensing model
        </a>
        , which takes a similar approach.
      </p>

      {/* Section 5 */}
      <h2>What Enterprises Actually Pay For</h2>

      <p>
        If the code is visible, why pay? Because enterprises don&rsquo;t pay for
        code. They pay for everything around it.
      </p>

      <ul>
        <li>
          <strong>SSO/SAML/OIDC</strong> &mdash; enterprise IT will not approve
          software that doesn&rsquo;t integrate with their identity provider. No
          SSO = no procurement approval.
        </li>
        <li>
          <strong>Audit logs</strong> &mdash; required for SOC 2, ISO 27001,
          HIPAA, PCI DSS. Every API call, every configuration change, every
          access event &mdash; logged and queryable.
        </li>
        <li>
          <strong>RBAC</strong> &mdash; who can access which MCP servers,
          skills, sandboxes. Granular permissions that map to organizational
          structure.
        </li>
        <li>
          <strong>SLA-backed support</strong> &mdash; 1-hour P1 response, 24/7.
          &ldquo;File a GitHub issue&rdquo; is not acceptable for production
          infrastructure.
        </li>
        <li>
          <strong>Cloud marketplace access</strong> &mdash; enterprises use
          committed spend (<strong>$470B+ outstanding</strong> across
          AWS/Azure/GCP). Buying through the marketplace draws down existing
          commitments instead of creating new line items.
        </li>
        <li>
          <strong>Red Hat certification</strong> &mdash; tested, patched,
          jointly supported. CVE response SLAs. The stamp of approval that
          enterprise procurement requires.
        </li>
      </ul>

      <p>
        This is exactly how Kong ($50K+/yr), Grafana ($400M ARR), and MongoDB
        ($2B revenue) make money on top of visible-source software. The code is
        the distribution channel. The enterprise wrapper is the product.
      </p>

      {/* Closing */}
      <p>
        The age of &ldquo;open source = business model&rdquo; is over. Open
        source is a distribution strategy, not a revenue model. The companies
        that understand this &mdash; and invest in the management layer, the
        certifications, the marketplace presence, and the operational excellence
        that enterprises actually pay for &mdash; are the ones that will build
        durable businesses.
      </p>

      <p>
        MCP Gateway is source-available because we believe in transparency. We
        chose FSL because we believe in building a sustainable company that can
        serve our customers for decades, not just until the next funding round.
      </p>
    </>
  );
}
