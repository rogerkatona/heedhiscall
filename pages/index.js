import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import Index02 from "../components/index_02";
import Index03 from "../components/index_03";
import Index04 from "../components/index_04";

export default function Home() {

    function Image() {
        let ref = useRef(null)
        let { scrollYProgress } = useScroll();
        let y = useTransform(scrollYProgress, [0,1], ["0%", "75%"])

        return (
            <section className="flex flex-col ">
                <div className = "h-screen flex flex-col items-center justify-center bg-bg-index bg-cover">
                    <motion.div
                        className="font-bebasNeue md:text-9xl text-4xl text-gray.300 md:text-2xl font-bold"
                        initial={{ opacity: 0, x: 0, y: 50 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{
                            duration: 2,
                            delay: 0,
                        }}>
                        Heed
                    </motion.div>
                    <motion.div
                        className="text-gray.300 md:text-2xl"
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{
                            duration: 2,
                            delay: 1,
                        }}>
                        A nonprofit corporation
                    </motion.div>
                </div>
            </section>
        );
    }


  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
                <Image/>
                <Index02/>
                <Index03/>

    </Layout>
  )
}
