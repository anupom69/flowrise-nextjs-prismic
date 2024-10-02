import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
/**
 * Props for `TextWithImage`.
 */

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" className="">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="max-w-md text-lg font-body text-slate-600">{children}</p>
  ),
};

export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <PrismicNextImage className={clsx(
            slice.variation == "imageRight" && "md:order-2"
          )} field={slice.primary.image} />
        <div
        className="grid gap-2"
        >
          <PrismicRichText
            components={components}
            field={slice.primary.heading}
          />
          <PrismicRichText components={components} field={slice.primary.body} />
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
