import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
/**
 * Props for `CallToAction`.
 */

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="sm" className="text-center mb-4 font-semibold">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-center text-slate-600 mb-8">{children}</p>
  ),
};

export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-4xl m-auto shadow-xl md:px-12 px-4 py-12 grid place-items-center rounded-lg bg-gradient-to-tr from-cyan-50 via-white to-emerald-50">
        <PrismicRichText components={components} field={slice.primary.heading} />
        <PrismicRichText components={components} field={slice.primary.body} />
        <Button field={slice.primary.action_button[0]?.button_link}>
          {slice.primary.action_button[0]?.button_name}
        </Button>
      </div>
    </Bounded>
  );
};

export default CallToAction;
