"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Mission() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section
            id={"mission"}
            className="w-11/12 lg:w-3/4 flex flex-col lg:flex-row justify-between p-10 py-16 "
            ref={ref}
        >
            <motion.h1
                className="text-3xl lg:text-4xl font-[500] mb-6 lg:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                MISSION
            </motion.h1>

            <div className="lg:ml-60">
                <motion.div
                    className="lg:text-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Since 2019, WPI students have conducted meaningful projects to address
                    challenges in the city of Kyoto through a blend of cultural understanding
                    and technological innovation. These projects span a wide range of topics,
                    from urban revitalization and sustainable farming practices to augmented
                    reality tourism and environmental education. Many of these initiatives
                    have supported Kyoto’s efforts to balance tradition with modern development.

                    <Link
                        className="mt-4 pb-2 flex justify-between items-center border-b border-b-black hover:border-b-gray-500 hover:text-gray-500 transition"
                        href="/site-info"
                    >
                        <h1>View Project Center Info</h1>
                        <ArrowRight />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
