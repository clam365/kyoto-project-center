import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './style.module.scss';
import { blur, translate } from '../../anim';

export default function Body({ links, selectedLink, setSelectedLink, setIsActive }) {
    const getChars = (word) => {
        return word.split("").map((char, i) => (
            <motion.span
                custom={[i * 0.02, (word.length - i) * 0.01]}
                variants={translate}
                initial="initial"
                animate="enter"
                exit="exit"
                key={char + i}
            >
                {char}
            </motion.span>
        ));
    };

    return (
        <div className={styles.body}>
            {links.map((link, index) => {
                const { title, href } = link;
                return (
                    <Link
                        key={`l_${index}`}
                        href={href}
                        onClick={() => setIsActive(false)} // Close navbar on click
                    >
                        <motion.p
                            onMouseOver={() => setSelectedLink({ isActive: true, index })}
                            onMouseLeave={() => setSelectedLink({ isActive: false, index })}
                            variants={blur}
                            animate={selectedLink.isActive && selectedLink.index !== index ? "open" : "closed"}
                        >
                            {getChars(title)}
                        </motion.p>
                    </Link>
                );
            })}
        </div>
    );
}
