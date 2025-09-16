import BlogList from "@/components/templates/blog/blog-list";
import { allPosts } from "contentlayer/generated";

const BlogListPage = () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return <BlogList posts={sortedPosts} />;
};

export default BlogListPage;
