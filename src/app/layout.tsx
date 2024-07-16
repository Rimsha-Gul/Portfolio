import type { Metadata } from "next";
import { Inter, Pacifico } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BackToTopButton from "@/components/BackToTopButton";

const inter = Inter({ subsets: ["latin"] });
export const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "Rimsha Gul - Front-End / Full-Stack Developer",
  description:
    "Explore Rimsha Gul's portfolio showcasing her expertise in front-end and full-stack development. Discover projects, skills, and experience with technologies such as React, Node.js, Next.js, Tailwind CSS, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
      </head>
      <body className={`${inter.className} ${pacifico.variable}`}>
        <Header />
        {children}
        <BackToTopButton />
      </body>
    </html>
  );
}
