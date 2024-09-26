import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <footer>
      <Link href={`/`}>{settings.data.site_title}</Link>
      <p>@{new Date().getFullYear()} {settings.data.site_title}</p>
      <ul>
        {settings.data.navigation.map(({ link, label }) => (
          <li key={label}>
            <PrismicNextLink field={link}>{label}</PrismicNextLink>
          </li>
        ))}
      </ul>
    </footer>
  );
}
