import Head from "next/head";

interface CustomHeadTypes {
  pageTitle: string;
}

const CustomHead = ({ pageTitle }: CustomHeadTypes) => {
  const title = `Portfolio by Rhyz | ${pageTitle}`;
  return (
    <Head key={"home"}>
      <title>{title}</title>
      <meta name="description" content="Portfolio website of Rhyz Arong" />
    </Head>
  );
};

export default CustomHead;
