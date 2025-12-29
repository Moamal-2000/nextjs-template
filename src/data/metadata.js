export const BASE_URL = "https://localhost:3000";
const title = "";
const keywords = [];
const description = "";

const GLOBAL_METADATA = { title, description, keywords };

export function getOpenGraphMetadata(pagePath = "") {
  const url = pagePath ? `${BASE_URL}/${pagePath}` : BASE_URL;

  return {
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "en_US",
      siteName: "",
      authors: ["Moamal Alaa"],
      images: [
        {
          url: `${BASE_URL}/og-image.webp`,
          type: "image/webp",
          alt: "",
          width: 1200,
          height: 634,
        },
      ],
    },
  };
}

export const METADATA = { ...GLOBAL_METADATA };
