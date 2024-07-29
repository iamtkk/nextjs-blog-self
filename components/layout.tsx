import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";

const name = "Meaning";
export const siteTitle = "First self blog";

const Layout = ({
  children,
  home,
}: {
  children: ReactNode;
  home?: boolean;
}) => {
  return (
    <div id="main-container" className="max-w-xl py-0 px-4 mt-12 mx-auto mb-24">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <header className="flex flex-col items-center">
        <Image
          className={`rounded-full object-cover ${
            home ? "w-36 h-36" : "w-28 h-28"
          }`}
          src="/images/profile.jpg"
          height={home ? 144 : 108}
          width={home ? 144 : 108}
          alt="luffy"
        />
        <h1 className={home ? "heading2Xl" : "headingXl"}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
