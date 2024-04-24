import * as React from "react";
import { cn } from "~/lib/utils";

// Replace the interface with a type alias to avoid empty interface warnings
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type} // retain the type attribute
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className // pass through any additional classes
        )}
        ref={ref} // pass the forwarded ref
        {...props} // spread the remaining props
      />
    );
  }
);

Input.displayName = "Input"; // set the display name for the component

export { Input };
