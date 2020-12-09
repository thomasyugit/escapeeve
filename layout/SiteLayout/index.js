import Head from "next/head";
import NavBar from "@/component/NavBar";
import SiteFooter from "@/component/SiteFooter";

const SiteLayout = (props) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      {props.children}
      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
