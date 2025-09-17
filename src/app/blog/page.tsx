import BlogList from "@/components/templates/blog/blog-list";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Site.Set",
  description: "Dicas e estratégias para impulsionar seu negócio",
  robots: "index, follow",
  openGraph: {
    title: "Blog - Site.Set",
    description: "Dicas e estratégias para impulsionar seu negócio",
    url: "https://next-rocket-seat.vercel.app/og-image.jpg",
    siteName: "Site.Set",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://next-rocket-seat.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Blog - Site.Set",
      },
    ],
  },
};

const BlogListPage = () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return <BlogList posts={sortedPosts} />;
};

export default BlogListPage;
