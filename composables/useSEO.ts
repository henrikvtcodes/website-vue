import { useHead } from "#app";

type TwitterMeta = {
  card?: string;
  site?: string | "@henrik_tech";
};

interface Meta {
  title: string;
  description: string;
  url?: string | "henriktech.com" | "henrikvt.com";
  image?: string;
  favicon?: string;
  twitter?: TwitterMeta;
}

const DefaultProps: Meta = {
  title: "henrik's website",
  description: "ooooo glassmorphism",
  url: "vue.henriktech.com",
  image: "henrik-forest.jpg",
  favicon: "henriklogo.png",
  twitter: {
    site: "@henrik_tech",
    card: "summary",
  },
};

export const useSEO = (props: Meta = DefaultProps) => {
  useHead({
    title: props.title,
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    meta: [
      { name: "title", content: props.title },
      { name: "description", content: props.description },
      { name: "og:type", content: "website" },
      { name: "og:title", content: props.title },
      { name: "og:description", content: props.description },
      { name: "og:url", content: `https://${props.url}` },
      { name: "og:image", content: props.image },
      { name: "twitter:card", content: props.twitter.card },
      { name: "twitter:site", content: props.twitter.site },
      { name: "twitter:url", content: `https://${props.url}` },
      { name: "twitter:title", content: props.title },
      { name: "twitter:description", content: props.description },
      { name: "twitter:image", content: props.image },
    ],
    link: [
      { rel: "icon", type: "image/png", href: props.favicon },
      { rel: "canonical", href: `https://${props.url}` },
    ],
  });
};
