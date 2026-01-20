"use client";

import Link from "next/link";
import { PropsWithChildren } from "react";

type Props = {
  href: string;
  onClick?: () => void;
};
export default function PrimaryButton({ href, children, onClick }: PropsWithChildren<Props>) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-2xl bg-[#ed7922] px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(237,121,34,0.6)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(237,121,34,0.8)] focus:outline-none"
    >
      {children}
    </Link>
  );
}
