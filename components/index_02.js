import {motion, useScroll, useTransform} from "framer-motion";

export default function Index02() {

    let { scrollY } = useScroll();
    let y = useTransform(scrollY, [0,1], ["0%", "100%"])
    let opacity = useTransform(scrollY, [1000,1750], [1,0])

    return (
        <section className="flex flex-row py-96 ">

            <div className="flex flex-col justify-center items-center text-center mx-auto lg:px-0 px-6 ">

                <motion.div
                    style={{ opacity }}
                    className="font-bebasNeue text-gray.300 md:text-9xl text-4xl"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0,
                    }}
                >
                    <div>For those who answer his call</div>

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
