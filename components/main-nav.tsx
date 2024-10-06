"use client";

import Link from "next/link";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function MainNav() {
  const pathName = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image
          src="/images/sp-logo-mini.png"
          alt={siteConfig.name}
          width={40}
          height={20}
          className="-ml-1"
        />
        <Icons.logoS className="w-7 h-7 dark:stroke-purple-400 stroke-gray-900" />
        <span className="font-bold !-ml-[0.1rem] dark:text-purple-400">
          {siteConfig.name}
        </span>
      </Link>
      <Link
        href="/blog"
        className={cn(
          "text-sm font-medium transition-all hover:text-primary hover:text-md hover:font-semibold hidden sm:inline-block",
          pathName === "/blog" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Blog
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-all hover:text-primary hover:text-md hover:font-semibold hidden sm:inline-block",
          pathName === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        About
      </Link>
    </nav>
  );
}
