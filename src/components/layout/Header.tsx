"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

function isNavLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-[#E9DFC8] backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-2xl font-semibold tracking-tight text-brand"
        >
          {/* {siteConfig.name} */}
          <Image
            src="/sairr-logo.webp"
            alt="sairr-logo"
            width={130.4}
            height={41.7}
            className="w-[65.2px] h-[20.85px] md:w-[104.32px] md:h-[33.36px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = isNavLinkActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm md:text-lg font-medium text-[#1b1d1f] underline-offset-4 transition-colors",
                  "hover:text-brand hover:underline hover:decoration-brand hover:font-bold",
                  isActive && "text-brand underline decoration-brand font-bold",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <ButtonLink
          href="/contact"
          className="hidden h-10 rounded-lg bg-brand px-4 font-sans text-sm md:text-base font-semibold text-white hover:bg-forest md:inline-flex"
        >
          Talk to us
        </ButtonLink>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            render={
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            }
          />
          <SheetContent side="right" className="w-[300px] bg-mist">
            <SheetHeader>
              <SheetTitle className="font-heading text-left text-brand">
                {siteConfig.name}
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = isNavLinkActive(pathname, link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2 text-base underline-offset-4 transition-colors hover:bg-sand hover:text-brand hover:underline hover:decoration-brand",
                      isActive && "text-brand underline decoration-brand",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <ButtonLink
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 h-10 rounded-lg bg-brand px-4 font-sans text-sm font-medium text-white hover:bg-forest"
              >
                Talk to us
              </ButtonLink>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
