import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CalloutProps {
  children?: ReactNode;
  type?: "default" | "warning" | "danger" | "success";
}

export function Callout({
  children,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 items-start rounded-md border border-l-4 p-4 w-full dark:max-w-none",
        {
          "border-blue-800 bg-blue-50 dark:bg-blue-800 dark:border-blue-100":
            type === "default",
          "border-red-800 bg-red-50 dark:border-red-100 dark:bg-red-800":
            type === "danger",
          "border-yellow-700 bg-yellow-50 dark:border-yellow-100 dark:bg-yellow-700":
            type === "warning",
          "border-green-800 bg-green-50 dark:prose": type === "success",
        }
      )}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
}
