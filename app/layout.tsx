import type { Metadata } from "next";
import "./globals.css";
import "./theme.css";
import ThemeControls from "./ThemeControls";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "From Signal to Safeguard",
  description: "A public AI–cyber decision-operations research prototype.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeControls />
        {children}
      </body>
    </html>
  );
}
