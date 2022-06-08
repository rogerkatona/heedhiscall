import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";
import Offerings from "../components/offerings";
import Services from "../components/services";
import HighlightBookACall02 from "../components/highlightBookACall02";
import HighlightQuote03 from "../components/highlightQuote03";


export default function Speaker() {

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <header className="bg-hero_workshops bg-cover h-screen50vh">
                <Hero id={1}/>
            </header>
            <Offerings type="workshops"/>
            <div className="flex flex-row justify-center font-bebasNeue text-5xl text-gray.700 bg-gray.200 py-12">
                In Person Workshop
            </div>
            <Services type="workshop" subtype="in-person"/>
            <HighlightQuote03/>
            <div className="flex flex-row justify-center font-bebasNeue text-5xl text-gray.700 bg-gray.200 py-12">
                Virtual Workshop
            </div>
            <Services type="workshop" subtype="virtual"/>
            <HighlightBookACall02/>
        </Layout>
    )
}