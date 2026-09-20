"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Menu } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { useContactFormDialog } from "@/components/forms/ContactFormDialogProvider";
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
  const { openContactForm } = useContactFormDialog();
  const pathname = usePathname();
  const locationHash = useSyncExternalStore(
    subscribeToLocationHash,
    getLocationHash,
    () => "",
  );
  // Next.js same-page hash links do not always emit hashchange before paint.
  const [pendingHash, setPendingHash] = useState<string | null>(null);
  const hash =
    pendingHash !== null && pendingHash !== locationHash
      ? pendingHash
      : locationHash;

  const isHome = pathname === "/";
  const [heroInView, setHeroInView] = useState(isHome);

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const hero = document.getElementById("home-hero");
    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroInView(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome, pathname]);

  const homeHeaderOverHero = isHome && heroInView;

  return (
    <header
      className={cn(
        "top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-300",
        isHome && "fixed",
        !isHome && "sticky border-b border-charcoal/10 bg-mist/95 backdrop-blur-lg",
        homeHeaderOverHero &&
          "border-b border-transparent bg-transparent backdrop-blur-none",
        isHome &&
          !heroInView &&
          "border-b border-charcoal/10 bg-white/55 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between pl-5 pr-6 sm:px-6 lg:px-8">
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
            const isActive = isNavLinkActive(pathname, link.href, hash);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setPendingHash(hashFromNavHref(link.href))}
                className={cn(
                  "relative inline-block text-sm font-medium transition-colors md:text-lg",
                  homeHeaderOverHero
                    ? "text-white/90 hover:text-white hover:font-bold"
                    : "text-[#1b1d1f] hover:text-brand hover:font-bold",
                  isActive &&
                    (homeHeaderOverHero
                      ? "font-bold text-white"
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
                    className="pointer-events-none absolute -bottom-1 left-0 h-auto w-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <Button
          type="button"
          onClick={() => openContactForm()}
          className="cursor-pointer hidden h-10 rounded-lg bg-[#FF4859] px-4 font-sans text-sm md:text-base font-semibold text-white hover:bg-[#E63B4C] hover:scale-104 tab-0.98 transition-all duration-300 md:inline-flex"
        >
          Contact Us
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className={cn(
                  homeHeaderOverHero &&
                    "text-white hover:bg-white/10 hover:text-white",
                )}
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
                const isActive = isNavLinkActive(pathname, link.href, hash);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setPendingHash(hashFromNavHref(link.href));
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
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openContactForm();
                }}
                className={cn(
                  "inline-block rounded-lg px-3 py-2 text-left text-base transition-colors hover:bg-sand hover:text-brand hover:font-bold",
                  pathname === "/contact" && "font-bold text-brand",
                )}
              >
                Contact Us
              </button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
