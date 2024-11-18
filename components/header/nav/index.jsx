'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';


const links = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Mission",
        href: "#mission",
    },
    {
        title: "Projects",
        href: "/projects",
    },
    {
        title: "Site-Info",
        href: "/projectcenter",
    },
    {
        title: "Contact",
        href: "#contact",
    }
]

export default function Index() {

    const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

    return (
        <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
                    <Footer />
                </div>
            </div>
        </motion.div>
    )
}