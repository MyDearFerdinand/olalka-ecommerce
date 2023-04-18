import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "./MainLayout.module.css";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
