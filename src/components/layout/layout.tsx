import { Inter, PT_Sans_Caption } from "next/font/google";
import Footer from "./footer/footer";
import Header from "./header/header";
import CallToAction from "../templates/landing-page/sections/call-to-action/call-to-action";

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});
const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sans",
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="pt-BR">
      <body className="text-gray-100">
        <div
          className={`${
            inter.className
          } ${`${ptSansCaption.className}`} relative flex min-h-screen flex-col bg-gray-700 font-inter`}>
          <Header />
          <main className="flex-1 flex flex-col mt-10 mb-12">{children}</main>
          <CallToAction />
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
