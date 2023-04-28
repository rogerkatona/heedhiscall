import {motion, useScroll, useTransform} from "framer-motion";

export default function HeroIndex() {

    let { scrollY } = useScroll();
    let y = useTransform(scrollY, [0,1], ["0%", "100%"])
    let opacity = useTransform(scrollY, [0,600], [1,0])

    return (
        <section className="flex flex-row min-h-screen max-h-screen relative">

            <div className="flex flex-col justify-center items-center text-center max-w-7xl mx-auto lg:px-0 px-6">

                    <motion.div
                        style={{ opacity }}
                        className="font-bebasNeue text-gray.300 md:text-9xl text-4xl"
                        initial={{ opacity: 0, x: 0, y: 40 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.4,
                        }}
                    >
                        <div>Heed</div>
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


        </section>
    )}
