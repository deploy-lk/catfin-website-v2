import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { mergeClasses } from "@/utils/styling";

const variants = cva(
  "w-auto inline-flex items-center justify-center whitespace-nowrap font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-all shadow-sm hover:shadow-md active:scale-95",
        defaultBox:
          "bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg text-center",
        outline:
          "border-2 border-red-500 text-red-500 hover:bg-red-50 px-6 py-2 rounded-full font-medium transition-all shadow-sm hover:shadow-md active:scale-95",
        outlineBox:
          "border-2 border-red-500 text-red-500 hover:bg-red-50 font-semibold py-3 px-8 rounded-lg transition-all text-center",
        ghost:
          "text-red-500 hover:bg-red-50 px-6 py-2 rounded-full font-medium transition-all hover:shadow-sm active:scale-95",
        ghostBlack:
          "text-gray-700 hover:bg-gray-100 px-6 py-2 rounded-full font-medium transition-all hover:shadow-sm active:scale-95",
        ghostBlackOutline:
          "border-2 border-gray-200 text-gray-700 hover:bg-gray-100 px-6 py-2 rounded-full font-medium transition-all hover:shadow-sm active:scale-95",
        link: "text-red-500 hover:text-red-600 font-medium underline-offset-4 hover:underline transition-colors",
      },
      size: {
        default: "h-10 text-sm",
        sm: "h-8 text-xs px-4",
        lg: "h-12 text-base px-8",
        icon: "h-10 w-10 p-2",
        link: "h-auto p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={mergeClasses(variants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
