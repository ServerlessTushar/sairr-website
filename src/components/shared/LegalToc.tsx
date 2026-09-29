"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

export type LegalTocItem = {
  id: string;
  label: string;
};

const MARKER = 112;

export function LegalToc({ items }: { items: LegalTocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const update = () => {
      let current = items[0]?.id ?? "";
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= MARKER) current = id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    event.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // Keep a shareable section URL without adding a browser-history entry.
    // Preserving the current state also avoids discarding Next.js router state.
    window.history.replaceState(window.history.state, "", `#${id}`);
  };

  return (
    <nav aria-label="Table of contents" className="lg:sticky lg:top-24">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/50">
        On this page
      </p>
      <ul className="mt-4 max-h-[calc(100vh-8rem)] space-y-1 overflow-y-auto pr-1">
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(event) => handleClick(event, id)}
              aria-current={active === id ? "location" : undefined}
              className={cn(
                "block rounded-full px-4 py-2 text-[13px] leading-snug transition-colors",
                active === id
                  ? "bg-brand font-semibold text-white"
                  : "text-slate hover:bg-white hover:text-brand"
              )}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
