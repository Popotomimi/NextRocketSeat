import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Post as Poste } from "contentlayer/generated";
import Image from "next/image";
import { Avatar } from "@/components/avatar";
import Markdown from "@/components/markdown/markdown";
import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks/use-share/use-share";

export type PostPageProps = {
  post: Poste;
};

const Post = ({ post }: PostPageProps) => {
  const publishedDate = new Date(post?.date).toLocaleDateString("pt-BR");
  const postUrl = `https://site.site/blog/${post.slug}`;

  const { shareButtons } = useShare({
    url: postUrl,
    title: post.title,
    text: post.description,
  });

  return (
    <main className="mt-32">
      <div className="container space-y-12 px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-action-sm">
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-blue-200 text-action-sm">
                {post?.title}
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
          <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={post?.image ?? ""}
                alt={post?.title ?? ""}
                fill
                className="object-cover"
              />
            </figure>
            <header className="p-4 md:p-6 lg:p-12 pb-0">
              <h1 className="mb-6 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
                {post?.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  src={post?.author.avatar}
                  alt={post?.title}
                  size="sm"
                />
                <Avatar.Content>
                  <Avatar.Title>{post?.title}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em{" "}
                    <time dateTime={publishedDate}>{publishedDate}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prove-invert max-w-none px-4 mt-12 md:px-6 lg:px-12">
              <Markdown content={post.body.raw} />
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-lg bg-gray-700 px-4 md:px-6">
              <h2 className="hidden md:block mb-4 text-heading-xs text-gray-100">
                Compartilhar
              </h2>

              <div className="flex justify-between md:flex-col gap-2">
                {shareButtons.map((provider) => (
                  <Button
                    key={provider.provider}
                    onClick={() => provider.action()}
                    variant={"outline"}
                    className="w-fit md:w-full justify-start gap-2">
                    {provider.icon}
                    <span className="hidden md:block ">{provider.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Post;
