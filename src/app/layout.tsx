import Layout from "@/components/layout/layout";
import "@/styles/globals.css";

export const metadata = {
  title: "Blog App",
  description: "Landing page and Blog App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
