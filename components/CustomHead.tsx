import Head from "next/head";

interface CustomHeadTypes {
  pageTitle: string;
}

const CustomHead = ({ pageTitle }: CustomHeadTypes) => {
  return (
    <Head key={"home"}>
      <title>Portfolio by Rhyz | {pageTitle}</title>
      <meta name="description" content="Portfolio website of Rhyz Arong"></meta>
    </Head>
  );
};

export default CustomHead;
