import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olinya Paul Chinedu | Portfolio",
  description: `I'm Paul, a MERN Stack Developer experienced in MongoDB, Express.js, React.js, and Node.js. I work with startups and businesses to build fast and scalable web applications.
I write clean code, design user-friendly interfaces, and build systems that grow with your business. Whether you're starting a new project or improving an existing one, I can help you build a solid web application.
Reach out if you need a reliable MERN Stack developer.`,
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-950">{children}</body>
    </html>
  );
}
