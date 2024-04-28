import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextApp",
  description: "For learning purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex max-h-screen min-h-screen bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 px-24 py-10">
          {children}
        </div>
      </body>
    </html>
  );
}
