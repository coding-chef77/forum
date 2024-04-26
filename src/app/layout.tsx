import { ClerkProvider } from "@clerk/nextjs";
import "~/styles/globals.css";

import { Inter } from "next/font/google";
import TopNav from "~/components/TopNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Forum",
  description: "Alt om forum for alle",
  icons: {
    icon: "/favicon.ico",
    url: "/favicon",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable}`}>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
