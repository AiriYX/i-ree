import React, { useState } from "react";
import { Helmet } from "react-helmet";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { motion, useScroll } from "framer-motion";
import styles from "./Home.module.css";

export const Home = () => {
  // useScroll();

  return (
    <>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Home</title>
      </Helmet>
      <div className={clsx(styles["background-div"], "p-24")}>
        <div className={clsx("capitalize", "p-9")}>
          {/* styles["content-border"] */}
          <div className={clsx(styles["header-left"])}>
            <h1
              className={clsx(
                "text-6xl",
                "pb-6",
                "leading-tight",
                "font-medium"
              )}
            >
              Hello, I'm Airi. {/* make my name interactive */}
              <br /> A current student at CCNY.
            </h1>
          </div>
          <div className={clsx(styles["description-left"])}>
            <p className={clsx()}>
              I am a computer science major with a strong passion for software
              development and technology. Currently, I'm focused on learning
              front-end web development, with experience in Java and C++.
            </p>
            <br />
            <p className={clsx("pb-8")}>
              My core skillsets include React, HTML, CSS, JavaScript, command
              line, and Git, which I utilize to build responsive and engaging
              web applications.
            </p>
          </div>
          <div className={styles.headingLine}></div>{" "}
          <div className={styles.headingLine}></div>{" "}
          <div className={styles.headingLine}></div>{" "}
          {/* line indicating new section*/}
        </div>
      </div>

      {/* end of bg div*/}
    </>
  );
};
export default Home;
