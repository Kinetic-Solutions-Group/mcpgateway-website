import Link from "next/link";
import { Logo } from "@/components/shared/logo";

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/docs/api" },
      { label: "Blog", href: "/blog" },
      { label: "Examples", href: "/docs/examples" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      {
        label: "GitHub",
        href: "https://github.com/Kinetic-Solutions-Group/mcpgateway",
      },
      { label: "Contact", href: "mailto:hello@mcpgateway.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
] as const;

export function Footer(): React.ReactNode {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-80"
            >
              <Logo className="size-6" />
              <span className="text-sm font-semibold tracking-tight">
                MCP Gateway
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Enterprise MCP server management with AI-powered Agent Skills.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-medium">{section.title}</h4>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Kinetic Solutions Group. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
