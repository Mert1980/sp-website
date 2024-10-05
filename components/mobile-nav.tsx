"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="w-10 px-0 sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-5 h-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setIsOpen}
        >
          <Icons.logoS className="w-7 h-7 -ml-2" />
          <Icons.logoP className="w-7 h-7" />
          <Icons.logoX className="mr-2 w-7 h-7 stroke-red-500" />
        </MobileLink>
        <div className="flex flex-col gap-3 mt-8">
          <MobileLink
            href="/blog"
            onOpenChange={setIsOpen}
            className={cn(
              "text-sm font-medium transition-all hover:text-primary hover:text-md hover:font-semibold",
              pathName === "/blog" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Blog
          </MobileLink>
          <MobileLink
            href="/about"
            onOpenChange={setIsOpen}
            className={cn(
              "text-sm font-medium transition-all hover:text-primary hover:text-md hover:font-semibold",
              pathName === "/blog" ? "text-foreground" : "text-foreground/60"
            )}
          >
            About
          </MobileLink>
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0")}
            >
              <Icons.gitHub className="w-4 h-4 -ml-2 mt-8" />
              <span className="sr-only ">GitHub</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0")}
            >
              <Icons.twitter className="w-4 h-4 -ml-2" />
              <span className="sr-only ">X</span>
            </div>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
