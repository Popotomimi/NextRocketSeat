import Search from "@/components/search/search";
import { useRouter } from "next/router";
import PostCard from "./components/post-card/post-card";
import PostGridCard from "./components/post-grid-card/post-grid-card";
import { allPosts } from "contentlayer/generated";
import { Inbox } from "lucide-react";

const BlogList = () => {
  const router = useRouter();
  const query = (router.query.q as string) || "";
  const pageTitle = query
    ? `Resultados para: "${query}"`
    : "Dicas e estratégias para impulsionar seu negócio";

  const posts = query
    ? allPosts.filter((post) =>
        post.title.toLowerCase()?.includes(query.toLowerCase())
      )
    : allPosts;
  const hasPosts = allPosts.length > 0;

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="pb-14">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            <span className="text-body-tag uppercase text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
              Blog
            </span>

            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              {pageTitle}
            </h1>
          </div>
          <Search />
        </div>
      </header>

      {hasPosts && (
        <PostGridCard>
          {posts.map((post) => (
            <PostCard
              key={post._id}
              title={post.title}
              description={post.description}
              date={new Date(post.date).toLocaleDateString("pt-BR")}
              slug={post.slug}
              image={post.image}
              author={{ name: post.author.name, avatar: post.author.avatar }}
            />
          ))}
        </PostGridCard>
      )}
      {!hasPosts && (
        <div className="container px-8">
          <div className="flex flex-col items-center justify-center gap-8 border-dashed border-2 border-gray-300 p-8 md:p-12 rounded-lg">
            <Inbox className="h-12 w-12 text-cyan-100" />
            <p className="text-gray-100 text-center">Nenhum post encontrado.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogList;
