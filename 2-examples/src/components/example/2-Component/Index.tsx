import React from "react";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import styles from "./Index.module.css";
import { IMAGES } from "../../../assets/image/image";

const JSX = () => {
//   window.addEventListener(
//     "resize",
//     function () {
//       console.log(window.innerWidth, window.innerHeight);
//       let elm = document.getElementById("div__right");
//       if (elm) {
//         elm.style.margin = window.innerWidth < 800 ? "auto" : "";
//       }
//     },
//     true
//   );
  return (
    <div className={`${styles.container}`}>
      <Header title = {'The Pulpit Rock'}/>
      <div className={`${styles.mainContent}`}>
        <div className={`${styles.sideBar__left}`}>
          <p>The Drive</p>
          <p>The Walk</p>
          <p>The Return</p>
          <p>The End</p>
        </div>
        <div className={`${styles.content}`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere
            at ipsam nisi, quod repellendus facilis suscipit porro adipisci
            velit perspiciatis, quisquam recusandae iusto consequatur molestiae
            distinctio nobis excepturi saepe.
          </p>
          <img src={IMAGES.street} alt="" />
        </div>
        <div className={`${styles.sideBar__right}`}>
          <div className={`${styles.sideBar__right__content}`}>
            <h2>What?</h2>
            <p>
              The Pulpit Rock is a part of a mountain that looks like a pulpit.
            </p>
          </div>
          <div className={`${styles.sideBar__right__content}`}>
            <h2>Where?</h2>
            <p>The Pulpit Rock is in Norway.</p>
          </div>
          <div className={`${styles.sideBar__right__content}`}>
            <h2>Price?</h2>
            <p>The walk is free!.</p>
          </div>
        </div>
      </div>
      <Footer title={'Footer'}/>
    </div>
  );
};

export default JSX;