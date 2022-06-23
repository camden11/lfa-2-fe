import Layout from "~/components/layout";
import Link from "next/link";
import styles from "~/styles/Home.module.css";

const Home = () => (
  <Layout>
    <h1>LFA 2</h1>
    <p className={styles.subtitle}>
      Try checking out the{" "}
      <Link href="/beerzone">
        <a>Beerzone</a>
      </Link>{" "}
      or{" "}
      <Link href="/snackzone">
        <a>Snackzone</a>
      </Link>
      .
    </p>
  </Layout>
);

export default Home;
