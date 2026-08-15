"use client";

import Link from "next/link";
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

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-mist/90 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-2xl font-semibold tracking-tight text-brand"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <ButtonLink
          href="/contact"
          className="hidden h-10 rounded-lg bg-brand px-4 font-sans text-sm font-medium text-white hover:bg-forest md:inline-flex"
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn("rounded-lg px-3 py-2 text-base transition-colors hover:bg-sand")}
                >
                  {link.label}
                </Link>
              ))}
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
