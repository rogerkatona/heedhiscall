import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

export default function Index03() {
    let ref = useRef(null)
    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0,1], ["0%", "75%"])

    return (
        <section className="h-screen ">
            <div className = "flex flex-col h-screen bg-bg-index bg-cover justify-center items-center" >
                <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{
                        duration: 1,
                        delay: 2,
                    }}
                    className="w-1/2"
                >
                    <div className="font-roboto md:text-4xl text-gray.300  text-center ">
                        We support consecrated vocations, religious life, and those who are discerning.
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{
                        duration: 1,
                        delay: 4,
                    }}>
                    <div className="text-center text-gray.400 font-roboto text-2xl flex flex-row space-x-24 pt-24">
                        <div className="bg-black.100 p-24">
                            Anchoritic vocations
                        </div>
                        <div className="bg-black.100 p-24">
                            Religious formation
                        </div>
                        <div className="bg-black.100 p-24">
                            Discernment expenses
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}