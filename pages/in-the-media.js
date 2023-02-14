import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";
import GridMedia from "../components/grid-media";
import Quote from "../components/quote";
import InTheMediaItem from "../components/inTheMediaItem";
import BookACall_05 from "../components/bookACall_05";


export default function InTheMedia() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="bg-hero_inTheMedia min-h-screen25vh max-h-screen25vh bg-cover bg-left bg-no-repeat flex flex-col justify-center">
                <Hero id={2}/>
            </div>
            <div className='font-bebasNeue text-6xl uppercase text-gray.700 flex flex-row justify-center py-12'>Featured Media</div>
            <InTheMediaItem  isFeatured="true"/>
            <Quote id={2}/>
            <GridMedia type="media"/>
            <BookACall_05/>
        </Layout>
    )
}