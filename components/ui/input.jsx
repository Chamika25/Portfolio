import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex xl:h-[20px] w-full rounded-md border-[1.5px] border-white/30 hover:border-accent-hover focus:border-accent font-light bg-primary px-4 py-4 placeholder:text-white/60 outline-none text-sm cursor-none",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
