import React from "react";
import Layout from "./Layout";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Layout>
        {/* Get year */}
        <p>&copy; {new Date().getFullYear()} Jason Diaz Jimenez</p>
      </Layout>
    </div>
  );
}
