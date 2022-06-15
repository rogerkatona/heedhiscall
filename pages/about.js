import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";
import BookACall_01 from "../components/bookACall_01";
import Link from "next/link";


export default function About() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="bg-hero-about bg-cover">
                <Hero id={5}/>
            </div>
            <section className="flex flex-col pt-12">
                <div className="flex max-w-7xl mx-auto">
                    <div className=''>
                        <img
                            src="image/about-01.png"
                            alt={'Featured Article'}
                        />
                    </div>
                    <div className="w-1/3 pl-6">
                        <div className='text-2xl text-gray.700 '>I’ve Been To My Own Workshop</div>
                        <div className="text text-gray.700 pt-2 pb-6">
                            Life is a canvas, and like artists, we have the power to create and recreate ourselves as often as we feel is necessary. I experienced burnout midway through my career in medicine. My life was mundane, routine and lacked fulfillment. I went from one &quot;TO DO&quot; list to another, day after day.  I had no time for self care, hobbies or free time.  I was physically AND emotionally exhausted. My relationships suffered. I made great money, had a big house and fancy cars, but I felt unfulfilled.
                        </div>

                    </div>
                </div>
            </section>
            <section className="flex flex-col py-12">
                <div className="flex flex-row-reverse max-w-7xl mx-auto">
                    <div className=''>
                        <img
                            src="image/about-02.png"
                            alt={'Featured Article'}
                        />
                    </div>
                    <div className="w-2/5 pr-6">
                        <div className="text text-gray.700 pt-2 pb-6">
                            Today I look at my life with joy.  I enjoy and am inspired by my work. I have strong relationships. I have time to nourish myself and pursue activities that excite me.  I feel empowered.  Yes, I’ve been to my own workshop and done the difficult work to get here!  I want to show others how to reclaim joy in their careers and personal lives.
                        </div>

                    </div>
                </div>
            </section>
            <div className="bg-gray.050 py-12">
                <BookACall_01/>
            </div>
        </Layout>
    )
}



