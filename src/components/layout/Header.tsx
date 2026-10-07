"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Menu } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
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
import underlineImg from "@/public/homepage/underline.png";

function hashFromNavHref(href: string) {
  const hashIndex = href.indexOf("#");
  return hashIndex === -1 ? "" : href.slice(hashIndex);
}

function isNavLinkActive(pathname: string, href: string, hash: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex !== -1) {
    const pathPart = href.slice(0, hashIndex) || "/";
    const hashPart = href.slice(hashIndex);
    return pathname === pathPart && hash === hashPart;
  }

  if (href === "/") {
    const hashNavActive = navLinks.some((link) => {
      const i = link.href.indexOf("#");
      if (i === -1) return false;
      const pathPart = link.href.slice(0, i) || "/";
      const hashPart = link.href.slice(i);
      return pathname === pathPart && hash === hashPart;
    });
    return pathname === "/" && !hashNavActive;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function subscribeToLocationHash(onStoreChange: () => void) {
  window.addEventListener("hashchange", onStoreChange);
  window.addEventListener("popstate", onStoreChange);
  return () => {
    window.removeEventListener("hashchange", onStoreChange);
    window.removeEventListener("popstate", onStoreChange);
  };
}

function getLocationHash() {
  return window.location.hash;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locationHash = useSyncExternalStore(
    subscribeToLocationHash,
    getLocationHash,
    () => "",
  );
  // Next.js same-page hash links do not always emit hashchange before paint.
  const [pendingHash, setPendingHash] = useState<string | null>(null);
  // Keep the selected item stable while a route transition is in progress. Without
  // this, clearing the hash for a non-hash route briefly makes Home active.
  const [pendingNavHref, setPendingNavHref] = useState<string | null>(null);
  const [pendingNavOrigin, setPendingNavOrigin] = useState<string | null>(null);
  const hash =
    pendingHash !== null && pendingHash !== locationHash
      ? pendingHash
      : locationHash;

  const isNavigationPending =
    pendingNavHref !== null &&
    pendingNavOrigin === `${pathname}${locationHash}`;

  function markNavigationPending(href: string) {
    setPendingNavHref(href);
    setPendingNavOrigin(`${pathname}${locationHash}`);
    setPendingHash(hashFromNavHref(href));
  }

  const [heroBannerInView, setHeroBannerInView] = useState(false);

  useEffect(() => {
    const heroes = document.querySelectorAll("[data-header-hero]");

    if (heroes.length === 0) {
      const frame = requestAnimationFrame(() => {
        setHeroBannerInView(false);
      });
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setHeroBannerInView(entries.some((entry) => entry.isIntersecting));
      },
      { threshold: 0 },
    );

    heroes.forEach((hero) => observer.observe(hero));
    return () => observer.disconnect();
  }, [pathname]);

  const homeHeaderOverHero = heroBannerInView;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-b border-charcoal/10 bg-white/55 backdrop-blur-md transition-[background-color,border-color,backdrop-filter] duration-300",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between pl-5 pr-6 sm:px-6 lg:px-8">
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
            const isActive = isNavigationPending
              ? pendingNavHref === link.href
              : isNavLinkActive(pathname, link.href, hash);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => markNavigationPending(link.href)}
                className={cn(
                  "relative inline-block text-sm font-medium transition-colors md:text-lg text-[#1b1d1f] hover:text-brand hover:font-bold",
                  isActive &&
                    (homeHeaderOverHero
                      ? "font-bold text-[#0E5E6F]"
                      : "font-bold text-brand"),
                )}
              >
                {link.label}
                {isActive && (
                  <Image
                    src={underlineImg}
                    alt=""
                    width={82}
                    height={6}
                    aria-hidden
                    className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 h-[8px] w-[50px]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          onClick={() => markNavigationPending("/contact")}
          className="hidden h-10 cursor-pointer items-center justify-center rounded-lg bg-[#ec575e] px-4 font-sans text-sm font-semibold text-white transition-all duration-300 hover:scale-104 hover:bg-[#dc4850] tab-0.98 md:inline-flex md:text-base"
        >
          Contact Us
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="text-charcoal hover:bg-charcoal/10 hover:text-charcoal"
              >
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
                const isActive = isNavigationPending
                  ? pendingNavHref === link.href
                  : isNavLinkActive(pathname, link.href, hash);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      markNavigationPending(link.href);
                      setOpen(false);
                    }}
                    className={cn(
                      "inline-block rounded-lg px-3 py-2 text-base transition-colors hover:bg-sand hover:text-brand hover:font-bold",
                      isActive && "font-bold text-brand",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => {
                  markNavigationPending("/contact");
                  setOpen(false);
                }}
                className={cn(
                  "inline-block rounded-lg px-3 py-2 text-base transition-colors hover:bg-sand hover:text-brand hover:font-bold",
                  pathname === "/contact" && "font-bold text-brand",
                )}
              >
                Contact Us
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
