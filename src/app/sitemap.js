export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_URL;

  const routesMap = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routesMap];
}

export const dynamic = "force-static";
