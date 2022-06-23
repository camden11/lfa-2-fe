import Image from "next/image";
import Link from "next/link";
import styles from "~/styles/Layout.module.css";

const Layout = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.nav}>
      <Link href="/">
        <a>
          <img className={styles.logo} src="/logo.png" />
        </a>
      </Link>
      <div className={styles.links}>
        <Link href="/snackzone">
          <a>Snackzone</a>
        </Link>
        <Link href="/beerzone">
          <a>Beerzone</a>
        </Link>
      </div>
    </div>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Layout;
