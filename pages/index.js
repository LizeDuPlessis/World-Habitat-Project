import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="keywords" content="habitats" />
        <title>Home|Page</title>
      </Head>

      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor sint
        laboriosam beatae quibusdam a voluptate modi, assumenda, impedit,
        reprehenderit recusandae sit repellendus nihil at expedita illum ipsum
        sequi repudiandae exercitationem!
      </p>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
        inventore! Necessitatibus, ratione voluptates doloremque nulla ex
        placeat reprehenderit sunt aut maiores quia nemo quo debitis dolores
        amet corrupti a. Corrupti.
      </p>
      <Link href="/country">
        <a className={styles.btn}>Country List</a>
      </Link>
    </div>
  );
}
