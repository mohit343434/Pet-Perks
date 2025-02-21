"use client";
import "./globals.css";
import LayoutWaper from "@/Components/LayoutWaper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutWaper>
          {children}
        </LayoutWaper>
      </body>
    </html>
  );
}
