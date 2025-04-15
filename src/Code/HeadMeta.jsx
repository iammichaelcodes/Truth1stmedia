
import Head from "next/head";

const HeadMeta = ({ title = "TruthFirst Media", description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description || "Satire meets substance. Expose corruption with memes, reports, and $ANTY governance."} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/banners/truthfirst_hero_banner.png" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadMeta;
