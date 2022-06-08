import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";
import Offerings from "../components/offerings";
import Services from "../components/services";
import HighlightBookACall01 from "../components/highlightBookACall01";
import HighlightQuote02 from "../components/highlightQuote02";
import HighlightQuote03 from "../components/highlightQuote03";


export default function Speaker() {

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <header className="bg-hero_speaker bg-cover h-screen50vh">
                <Hero id={0}/>
            </header>
            <Offerings type="speaker"/>
            <div className="flex flex-row justify-center font-bebasNeue text-5xl text-gray.700 bg-gray.200 py-12">
                Opening Keynotes
            </div>
            <Services type="speaker" subtype="opening_keynote"/>
            <HighlightQuote02/>
            <div className="flex flex-row justify-center font-bebasNeue text-5xl text-gray.700 bg-gray.200 py-12">
                Breakout Sessions
            </div>
            <Services type="speaker" subtype="breakout_session"/>
            <HighlightQuote03/>
            <div className="flex flex-row justify-center font-bebasNeue text-5xl text-gray.700 bg-gray.200 py-12">
                Closing Keynotes
            </div>
            <Services type="speaker" subtype="closing_keynote"/>
            <HighlightBookACall01/>
        </Layout>
    )
}