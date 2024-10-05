import { ReactNode } from "react";

interface ImageProps {
  children?: ReactNode;
}

export function CenteredContainer({ children, ...props }: ImageProps) {
  return (
    <div className="flex justify-center items-center" {...props}>
      {children}
    </div>
  );
}
