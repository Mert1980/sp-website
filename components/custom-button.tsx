import { cn } from "@/lib/utils";
import Marker from "./Marker";

import React from "react";
import Image from "next/image";

interface ButtonProps {
  icon?: string;
  children: React.ReactNode;
  href?: string;
  containerClassName?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  fill?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  fill,
}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker fill={fill} />
        </span>
        {icon && (
          <Image
            src={icon}
            width={20}
            height={20}
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span className="relative z-2 font-poppins base-bold text-p6 uppercase">
          {children}
        </span>
      </span>

      <span className="light-glow-before dark:glow-before light-glow-after dark:glow-after" />
    </>
  );

  return href ? (
    <a
      className={cn(
        "relative p-0.5 dark:g5 g1 rounded-2xl shadow-500 group",
        containerClassName
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={cn(
        "relative p-0.5 dark:g5 g1 rounded-2xl shadow-500 group",
        containerClassName
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default CustomButton;
