"use client";
import { Button } from "@/components/ui/button";
import {
  SignIn,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Search } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex items-center justify-between p-3 md:px-20 shadow-sm">
      <Image src="/logo.png" width={200} height={200} />
      <div className="hidden md:flex p-2 border w-96 bg-gray-100 rounded-lg">
        <input type="text" className="w-full bg-transparent outline-none" />
        <Search />
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-4">
          <SignInButton mode="modal">
            <Button variant="outline">Login</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button>Signup</Button>
          </SignUpButton>
        </div>
      )}
    </div>
  );
};
export default Header;
