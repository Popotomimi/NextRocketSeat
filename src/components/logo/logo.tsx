import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" title="Página inicial">
      <Image src="/logo.svg" alt="Logo site" width={116} height={32} />
    </Link>
  );
};

export default Logo;
