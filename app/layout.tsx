import type { Metadata } from "next";
import Navigation from "./navigation/Navigation";
import "./globals.scss";

export const metadata: Metadata = {
  title: "My Reports",
  description:
    "A detailed report of content removal activities, including infringements, medial removals, and insights into impacted value and top offenders",
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
