import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import HeroIndex from "../components/hero_index"
import {motion, useScroll, useTransform, useSpring} from "framer-motion";
import Index02 from "../components/index_02";
import Index03 from "../components/index_03";

export default function Home() {


    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0,1], ["0%", "100%"])
    let opacity = useTransform(scrollYProgress, [0,1], [.5,0])

  return (
    <Layout className="flex flex-col items-center justify-center relative ">
      <Head>
        <title>{siteTitle}</title>
      </Head>

        <section className="relative">
            <motion.div
                style={{ y, opacity }}
                className="absolute mx-auto bg-bg-index bg-cover bg-repeat-y h-screen w-screen"
            >
            </motion.div>
        <HeroIndex/>
        <Index02/>
        <Index03/>
        </section>
    </Layout>
  )
}
