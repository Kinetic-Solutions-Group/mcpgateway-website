import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound(): React.ReactNode {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-muted-foreground">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button className="mt-8" asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
}
