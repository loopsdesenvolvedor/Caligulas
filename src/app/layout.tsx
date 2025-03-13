import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyle from "@/styles/GlobalStyle";
import ThemeProvider from "@/providers/ThemeProvider";

import Header from "@/components/header";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} `}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <GlobalStyle />
            <Header />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
