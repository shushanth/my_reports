import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
