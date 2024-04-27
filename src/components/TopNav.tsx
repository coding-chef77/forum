import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import StyledButton from "~/components/StyledButton";

export default function TopNav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 flex  w-full items-center justify-between border-b border-gray-300 p-4 text-xl font-semibold">
      <div>Forum</div>
      <div>
        <SignedOut>
          <StyledButton>
            <SignInButton>Logg Inn</SignInButton>
          </StyledButton>
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
