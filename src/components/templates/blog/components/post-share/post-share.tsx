"use client";

import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks/use-share/use-share";

type PostShareProps = {
  url: string;
  title: string;
  text: string;
};

const PostShare = ({ url, title, text }: PostShareProps) => {
  const { shareButtons } = useShare({
    url,
    title,
    text,
  });
  return (
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
  );
};

export default PostShare;
