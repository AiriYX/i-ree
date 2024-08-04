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
      <header>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Home</title>
      </header>
      <div className={clsx(styles["main-page"], "pt-24")}>
        <div className={clsx(styles["intro"], "capitalize", "text-5xl", "")}>
          <h1>
            Hello, I'm Airi.
            <br />A current student at CCNY.
          </h1>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Home;
