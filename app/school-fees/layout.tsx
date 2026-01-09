import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Fees Support | MTR Foundation",
  description: "Learn about our School Fees Support program. We help disadvantaged students stay in school by covering their tuition.",
};

export default function SchoolFeesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
