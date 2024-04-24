import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { Button as BaseButton } from "~/components/ui/button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Null Karbo",
  description: "Alt om animalk kosthold",
  icons: {
    icon: "/favicon.ico",
    url: "/favicon",
  },
};

function StyledButton({ ...props }) {
  return (
    <BaseButton
      className="transform rounded-lg bg-green-500 text-black shadow-md transition-all duration-200 ease-in-out hover:scale-105 hover:bg-green-600 hover:shadow-lg"
      {...props}
    ></BaseButton>
  );
}

function TopNav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 flex  w-full items-center justify-between border-b border-gray-300 p-4 text-xl font-semibold">
      <div>NullKarbo</div>
      <div>
        <SignedOut>
          <div className="transform rounded-lg bg-green-500 p-2 text-black shadow-md transition-all duration-200 ease-in-out hover:scale-105 hover:bg-green-600 hover:shadow-lg">
            <SignInButton>Logg Inn</SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <div className="flex gap-4">
            {" "}
            <UserButton />
            <StyledButton>Ny Post</StyledButton>
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}

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
