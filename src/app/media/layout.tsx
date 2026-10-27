import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Media Gallery",
  description: "Photo and media gallery of the Ministry of Industry, Mines & Solid Minerals, Imo State Government.",
  path: "/media",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
