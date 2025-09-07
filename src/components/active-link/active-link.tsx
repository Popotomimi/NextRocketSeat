import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const router = useRouter();
  const isCurrentPath =
    router.asPath === href ||
    router.asPath === rest.as ||
    router.asPath.startsWith(String(rest.as));

  return (
    <Link
      className={cn(
        "text-sm font-medium transition-colors hover:text-blue-500",
        isCurrentPath ? "text-blue-500" : "text-muted-foreground"
      )}
      href={href}>
      {children}
    </Link>
  );
};

export default ActiveLink;
