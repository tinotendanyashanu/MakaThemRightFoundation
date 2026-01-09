import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer | MTR Foundation",
  description: "Join our team of volunteers. Help us organize drives, distribute supplies, and make a real impact in the community.",
};

export default function VolunteerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
