@@ -1,50 +0,0 @@
"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
const LivekitLogo = () => {
  const { theme } = useTheme();

  const fillColor = theme === "dark" ? "#fff" : "#000";

  return ();
};

export default function LK() {
  return (
    <Link href="/" className="hover:opacity-70 transition-all duration-250 scale-[0.8]">
      <LivekitLogo />
    </Link>
  );
}
