"use client";

import { Button as BaseButton } from "~/components/ui/button";

export default function StyledButton({ ...props }) {
  return (
    <BaseButton
      className="transform rounded-lg bg-green-500 text-black shadow-md transition-all duration-200 ease-in-out hover:scale-105 hover:bg-green-600 hover:shadow-lg"
      {...props}
    />
  );
}
