import {motion} from "framer-motion";
import {useRef} from "react";

export default function HeroIndex() {

    return (
        <section className="flex flex-row min-h-screen max-h-screen relative">
            <div
                className="flex flex-col justify-center items-center text-center max-w-7xl mx-auto lg:px-0 px-6">
                    <motion.div
                        style={{ opacity }}
                        className="font-bebasNeue text-gray.300 md:text-9xl text-4xl"
                        initial={{ backgroundColor: "#000" }}
                        whileInView={{ backgroundColor: "#2b0687" }}
                        exit={{
                            opacity: 0,
                            backgroundColor: "#dadada",
                            transition: { backgroundColor: { delay: 0 }, opacity: { delay: 0.2 } }
                        }}
                        transition={{
                            duration: 0.25,
                            delay: 0.5
                        }}
                    >
                        <div>Heed</div>

                    </motion.div>
                <motion.div
                    className="text-gray.300 md:text-2xl pb-4"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                        duration: 2,
                        delay: 1,
                    }}>
                    A nonprofit corporation
                </motion.div>
                </div>
        </section>
    )}
