"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div>
            <div className="flex justify-end">
                <motion.p
                    className="text-black text-3xl w-3/4 my-16 font-[500] mr-4"
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 25, damping: 12 }}
                >
                    The Kyoto Project Center offers WPI students a chance to leave their mark in Japan’s
                    cultural heart, blending tradition and innovation through impactful, real-world projects.
                </motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 25, damping: 12 }}
            >
                <Image src="/yadoya.jpeg" alt="Yadoya" width={600} height={450} className="w-full" />
            </motion.div>
        </div>
    );
}
