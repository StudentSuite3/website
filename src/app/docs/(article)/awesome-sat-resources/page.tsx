import type { Metadata } from "next";

import { fetchAwesomeList } from "@/lib/awesome-list";
import { AwesomeListBrowser } from "@/components/docs/awesome-list-browser";

export const metadata: Metadata = {
  title: "Awesome SAT Resources",
  description:
    "Free SAT practice tests, formula sheets, video lessons, vocab lists, and study communities for the digital SAT.",
};

export default async function AwesomeSatResourcesPage() {
  const sections = await fetchAwesomeList("awesome-sat-resources");

  return (
    <AwesomeListBrowser
      sections={sections}
      repoName="awesome-sat-resources"
      repoUrl="https://github.com/StudentSuite/awesome-sat-resources"
    />
  );
}
