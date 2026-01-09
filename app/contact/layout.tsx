import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | MTR Foundation",
  description: "Reach out to Make Them Right Foundation. We are here to answer your questions and discuss how you can help.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
