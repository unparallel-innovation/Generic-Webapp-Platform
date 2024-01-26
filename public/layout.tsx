import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from 'next-auth/react';
import globals from "@/styles/global.module.css"
import "@/styles/theme.scss"
import {useSession} from "next-auth/react";
import Header from "@/components/layout/Header";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });
const siteTitle = "Common UI";

export const metadata: Metadata = {
  title: siteTitle,
  description: "Learn how to build a personal website using Next.js",
  openGraph:{
    images:{
      url:`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`
    },
    title:siteTitle
  },
  twitter:{
    card:"summary_large_image"
  }
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

  const Component = children
  return (

    <html lang="en">
      <body className={`d-flex flex-column vw-100 vh-100 bg-secondary ${inter.className}`}>
        <ClientLayout >
          {children}
        </ClientLayout>
      </body>
    </html>

);
return (
  <html lang="en">
  <body className={inter.className}>{children}</body>
    </html>
  );
}
