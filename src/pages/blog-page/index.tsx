import BlogList, { BlogListProps } from "@/components/templates/blog/blog-list";
import { allPosts } from "contentlayer/generated";
import { GetStaticProps } from "next";

const BlogPage = ({ posts }: BlogListProps) => {
  return <BlogList posts={posts} />;
};

export default BlogPage;

export const getStaticProps = (async () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return {
    props: {
      posts: sortedPosts,
    },
  };
}) satisfies GetStaticProps<BlogListProps>;
