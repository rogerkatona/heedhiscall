import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

export default function Index02() {
    let ref = useRef(null)
    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0,1], ["0%", "75%"])

    return (
        <section className="flex flex-col h-screen ">
            <div className = "h-screen bg-bg-index2 bg-cover">
                <motion.div
                    initial={{ opacity: 0, x: 225, y: 500}}
                    whileInView={{ opacity: 1, x: 300, y: 500}}
                    transition={{
                        duration: 1,
                        delay: 1,
                    }}>
                    <div className="font-script md:text-7xl text-gray.300 ">
                        for those who answer His call
                    </div>
                </motion.div>

            </div>
        </section>
    );
}