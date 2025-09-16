import Post from "@/components/templates/blog/post-page";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Post post={post} />
    </div>
  );
};

export default BlogPostPage;
