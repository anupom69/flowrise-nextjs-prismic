import { Content, isFilled } from "@prismicio/client";
import {
  SliceComponentProps,
  JSXMapSerializer,
  PrismicRichText,
} from "@prismicio/react";
import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
/**
 * Props for `Testimonials`.
 */

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="text-center mb-9 font-semibold">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-xl md:text-2xl font-normal font-body text-slate-600 mb-8">
      {children}
    </p>
  ),
};

export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = async ({
  slice,
}: TestimonialsProps): Promise<JSX.Element> => {
  const client = createClient();
  const testimonials = await Promise.all(
    slice.primary.repeatable_testimonials.map((item) => {
      if (
        isFilled.contentRelationship(item.testimonial) &&
        item.testimonial.uid
      ) {
        return client.getByUID("testimonial", item.testimonial.uid);
      }
    })
  );
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={components} field={slice.primary.heading} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {testimonials.map(
          (item, index) =>
            item && (
              <div
                key={index}
                className="border bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between"
              >
                <PrismicRichText
                  components={components}
                  field={item.data.quote}
                />
                <div className="flex items-center">
                  <PrismicNextImage
                    width={56}
                    height={56}
                    field={item.data.avatar}
                    className="rounded-full h-14 w-14 mr-4"
                    imgixParams={{ ar: "1:1", fit: "crop" }}
                  />
                  <div>
                    <p className="text-base font-medium text-slate-700">{item.data.name}</p>
                    <p className="text-base text-slate-600">{item.data.job_title}</p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </Bounded>
  );
};

export default Testimonials;
