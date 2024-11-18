'use client';
import styles from './style.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './anim';
import Nav from './nav';

export default function index() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.header}>
            <div className={styles.bar}>
                <Link href="/">Kyoto Project Center</Link>
                <motion.div variants={opacity} animate={!isActive ? "open" : "closed"} className={styles.shopContainer}>
                    <p className={styles.shop}>Shop</p>
                    <div className={styles.el}>
                        <p>Mission</p>
                        <p>Projects</p>
                        <p>Projects</p>
                        <p>Contact</p>
                    </div>
                </motion.div>

                <div onClick={() => {
                    setIsActive(!isActive)
                }} className={styles.el}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    <div className={styles.label}>
                        <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}></motion.p>
                        <motion.p variants={opacity} animate={isActive ? "open" : "closed"}></motion.p>
                    </div>
                </div>
            </div>
            <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"}
                        className={styles.background}></motion.div>
            <AnimatePresence mode="wait">
                {isActive && <Nav/>}
            </AnimatePresence>
        </div>
    )
}