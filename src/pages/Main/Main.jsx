import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner";



function Main() {

  const news = {
    title: "dsfsd"
  }



  return (
<>
  <div className={styles.container}>
    <div className={styles.banners}>
      <NewsBanner item={news} />
      <NewsBanner item={news} />
    </div>
  </div>
</>
  )
}

export default Main;