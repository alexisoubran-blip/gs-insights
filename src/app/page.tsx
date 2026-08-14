import { HomeView } from "@/views/home";
import { generateMetadata } from "@/utils/seo/generate-page-metadata";
import { languageAlternates } from "@/data/locale-routes";

export const metadata = generateMetadata({
  url: "/",
  languages: languageAlternates("/"),
});

export default function Home() {
  return <HomeView />;
}
