import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import { FlowriseIcon } from "./Logos";
import Bounded from "./Bounded";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <Bounded as="footer">
      <div className="flex sm:flex-row flex-col justify-between gap-6 items-center">
        <Link href={`/`}>
          <FlowriseIcon />
        </Link>
        <p className="text-xs">
          ©{new Date().getFullYear()} {settings.data.site_title}
        </p>
        <ul className="flex">
          {settings.data.navigation.map(({ link, label }) => (
            <li key={label} className="p-3">
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </Bounded>
  );
}
