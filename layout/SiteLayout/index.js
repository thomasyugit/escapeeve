import Head from "next/head";
import NavBar from "@/component/NavBar";
import SiteFooter from "@/component/SiteFooter";
import styles from "./style.module.css";

const SiteLayout = (props) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <div className={styles["container"]}>{props.children}</div>
      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
