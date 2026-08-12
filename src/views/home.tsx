/** Home view. The server owns the copy; the client stage owns the experience. */
import { homeFaq, homeFooter, homeLoader, homeProof } from "@/data/mocks/home";
import { ScrollStage } from "./home/scroll-stage";

export const HomeView = () => {
  return (
    <ScrollStage
      loader={homeLoader}
      proof={homeProof}
      faq={homeFaq}
      footer={homeFooter}
    />
  );
};
