import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200",
    "focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2",
    variant === "primary" &&
      "bg-slate-950 text-white hover:bg-slate-800",
    variant === "secondary" &&
      "bg-white text-slate-950 ring-1 ring-slate-200 hover:bg-slate-50",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}