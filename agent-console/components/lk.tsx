"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
const LivekitLogo = () => {
  const { theme } = useTheme();

  const fillColor = theme === "dark" ? "#fff" : "#000";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="104"
      height="24"
      viewBox="0 0 157 36"
      fill="none"
      >
      <circle cx="80" cy="18" r="10" stroke="red" stroke-width="4" fill="none" />
    </svg>
  );
};

export default function LK() {
  return (
    <Link href="/" className="hover:opacity-70 transition-all duration-250 scale-[0.8]">
      <LivekitLogo />
    </Link>
  );
}

