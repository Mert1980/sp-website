import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";

const useMDXComponents = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,

  // You can add custom taxonomy from shadcn taxonomy if you want
};

interface MDXProps {
  code: string;
}

export function MDXContent({ code }: MDXProps) {
  const Component = useMDXComponents(code);
  return <Component components={components} />;
}
