import {motion, useScroll, useTransform} from "framer-motion";

export default function Index03() {

    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0,1], ["0%", "100%"])
    let opacity = useTransform(scrollYProgress, [0,1], ["0%", "100%"])

    return (
        <motion.div
            style={{ opacity, y }}
            className="flex flex-row py-96">

            <div className="flex flex-col justify-center items-center text-center max-w-7xl mx-auto lg:px-0 px-6 ">

                <motion.div
                    style={{ opacity }}
                    className="font-bebasNeue text-gray.300 md:text-6xl text-4xl"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0,
                    }}
                >
                    <div>We support consecrated vocations, those who are discerning, and people and organizations that support religious life.</div>

                </motion.div>



                {/*                    <div className="flex space-x-2">
                            <a
                                className="hover:bg-rust.800 text-white.100 text-xs uppercase hover:text-gray-50 px-4 py-3 bg-rust.500 rounded-lg"
                                href="https://calendly.com/drkalpanasundar"
                                target="_blank"
                                rel="noreferrer">
                                Donate
                            </a>
                    </div>*/}
            </div>


        </motion.div>
    )}
