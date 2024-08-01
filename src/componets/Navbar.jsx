import React, { useState } from 'react';
import styles from './Navbar.module.css';
import {Helmet} from 'react-helmet';
import clsx from 'clsx';
import logo from '../logo.svg';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false); //this is used to toggle class active in order to set a state for the navbar and the hamburger icon on click

    const toggleActiveClass = () => { //checks if any nav link is clicked and toggles the class active
        setIsActive(!isActive);
    }
    
    const removeActiveClass = () => { //removes the active class from the nav link and resets 
        setIsActive(false);
    }

    return (
        <div className="App-header">
            <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/> 
            </Helmet>

            <header className="App-header">
                <nav className={`${styles.navbar}`}> {/*unordered list of nav links */}
                    {/* {logo here} */}
                    {/* <img src={logo} className="App-logo" alt="logo" width="10rem"/> */}
                    <img src={logo} className={styles.logo} alt="logo" href="Home"/>
                    {/* <span>test</span> */}
                    {/* <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}> */}
                    <ul className={clsx(styles.navMenu, isActive && styles.active)}>
                        <li onClick={removeActiveClass}>
                            {/* <a href="/" className={`${styles.navLink}`}>Home </a> */}
                            <a href='/' className={styles.navLink}>Home</a>
                        </li>
                        <li onClick={removeActiveClass}>
                            <a href ="/" className={styles.navLink}>Projects</a>
                        </li>
                        <li onClick={removeActiveClass}>
                            <a href="/" className={styles.navLink}>About me</a>
                        </li>
                    </ul>

                    <div className={clsx(styles.hamburger, isActive && styles.active, onclick={toggleActiveClass})}>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </div>
                </nav>

            </header>
        </div>
    )
}

export default Navbar;