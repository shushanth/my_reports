import type { Metadata } from "next";
import "./globals.scss";
import Navigation from "./navigation/Navigation";

export const metadata: Metadata = {
  title: "My Reports",
  description:
    "A detailed report of content removal activities, including infringements, media removals, and insights into impacted value and top offenders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app_layout">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
