import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

export default function Index04() {
    let ref = useRef(null)
    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0,1], ["0%", "75%"])

    return (
        <section className="h-screen ">
            <div className = "flex flex-col h-screen bg-bg-index2 bg-cover justify-center items-center" >
                <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{
                        duration: 1,
                        delay: 2,
                    }}>
                    <div className="text-center text-gray.400 grid grid-cols-3 h-36 space-x-6   ">
                        <div className="bg-black.100 ">
                            Anchoritic vocations
                        </div>
                        <div className="bg-gray.800 ">
                            Religious formation
                        </div>
                        <div className="bg-gray.800 ">
                            Discernment expenses
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}