import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";
import VideoGrid from "../components/video-grid";
import Quote from "../components/quote";
import FeaturesMedia from "../components/features-media";
import BookACall_02 from "../components/bookACall_02";


export default function InTheMedia() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="bg-hero_inTheMedia bg-cover">
                <Hero id={2}/>
            </div>
            <div className='font-bebasNeue text-6xl uppercase text-gray.700 flex flex-row justify-center py-12'>Featured Media</div>
            <FeaturesMedia  featuredOnPage="true" type="media" />
            <Quote id={2}/>
            <VideoGrid/>
            <BookACall_02/>
        </Layout>
    )
}