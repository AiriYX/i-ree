import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Helmet } from "react-helmet";
import clsx from "clsx";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useAnimation,
} from "framer-motion";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [typing, setTyping] = useState(true);
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();

  useEffect(() => {
    // Listen to scrollYProgress changes and animate background accordingly
    return scrollYProgress.onChange((latest) => {
      if (latest > 0.4) {
        setTyping(false);
        controls.start({
          backgroundColor: "#fff",
          transition: { duration: 0.5 },
        });
      } else {
        setTyping(true);
        controls.start({
          backgroundColor: "rgba(255, 255, 255, 0)",
          transition: { duration: 0.3 },
        });
      }
    });
  }, [scrollYProgress, controls]);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActiveClass = () => {
    setIsActive(false);
  };

  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <header className="fixed top-0 left-0 right-0">
        <motion.div
          animate={controls}
          initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
          className="w-full"
        >
          <nav className={clsx(styles.navbar, styles.typingEffect, "h-20")}>
            <Link to="/">
              {typing ? (
                <ReactTypingEffect
                  text={["<i-ree>_"]}
                  typingDelay={500}
                  eraseDelay={2500}
                  cursor=""
                  speed={90}
                  className="typing-effect-container"
                  cursorClassName="text-slate-950"
                  displayTextRenderer={(text) => {
                    return (
                      <h1>
                        {text.split("").map((char, i) => {
                          const key = `${i}`;
                          return (
                            <span
                              key={key}
                              style={
                                i % 2 === 0
                                  ? { color: "black" }
                                  : { color: "violet" }
                              }
                              className="text-xl font-normal"
                            >
                              {char}
                            </span>
                          );
                        })}
                      </h1>
                    );
                  }}
                />
              ) : (
                <h1>
                  {"<i-ree>_".split("").map((char, i) => (
                    <span
                      key={i}
                      style={
                        i % 2 === 0 ? { color: "black" } : { color: "violet" }
                      }
                      className="text-xl font-normal"
                    >
                      {char}
                    </span>
                  ))}
                </h1>
              )}
            </Link>

            <ul className={clsx(styles.navMenu, isActive && styles.active)}>
              <li onClick={removeActiveClass}>
                <Link to="/" className={clsx(styles.navLink, "bar-slide")}>
                  Home
                </Link>
              </li>
              <li onClick={removeActiveClass}>
                <Link
                  to="/projects"
                  className={clsx(styles.navLink, "bar-slide")}
                >
                  Projects
                </Link>
              </li>
              <li onClick={removeActiveClass}>
                <Link
                  to="/about-me"
                  className={clsx(styles.navLink, "bar-slide")}
                >
                  About me
                </Link>
              </li>
            </ul>
            <div
              className={clsx(styles.hamburger, isActive && styles.active)}
              onClick={toggleActiveClass}
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </div>
          </nav>
        </motion.div>
      </header>
    </div>
  );
};

export default Navbar;
