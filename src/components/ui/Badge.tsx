// /components/ui/Badge.tsx
"use client";
import { PropsWithChildren } from "react";

export default function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/80 backdrop-blur-sm">
      {children}
    </span>
  );
}
