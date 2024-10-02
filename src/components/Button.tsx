import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";
import { ComponentProps } from "react";

export default function Button({
  className,
  ...restProps
}: ComponentProps<typeof PrismicNextLink>) {
  return (
    <PrismicNextLink
      className={clsx(
        "block w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wider",
        className
      )}
      {...restProps}
    />
  );
}
