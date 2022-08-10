import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const SITE_TITLE = "OzzyTheDev";
  const SITE_DESCRIPTION =
    "Hewwo There! I'm Ozzy - I’m a Full Stack Web Developer, Discord Bot Dev, High School Senior and Certified Coffee Addict.";
  const SITE_IMAGE = "https://www.ozzy.gay/images/hero/1.png";
  const url = `https://www.ozzy.gay${router.pathname}`;

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={SITE_IMAGE} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:type" content="image/png" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={SITE_IMAGE} />
        <meta name="twitter:url" content={url} />
        <link rel="canonical" href={url} />
      </Head>
      <Navbar />
      {children}
    </>
  );
}
