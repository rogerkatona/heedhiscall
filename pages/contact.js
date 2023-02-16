import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";
import BookACall_07 from "../components/bookACall_07";

export default function Contact() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="bg-blue.600 min-h-screen25vh max-h-screen25vh bg-cover bg-left bg-no-repeat flex flex-col justify-center">
                <Hero id={2}/>
            </div>
            <section className="pt-12">
                <div className="flex flex-col">
                    <div className="flex max-w-7xl mx-auto lg:px-0 md:px-12 px-4 lg:flex-row-reverse flex-col">
                        <div className=''>
                            <img
                                src="/image/placeholder-01.jpg"
                                width={1000}
                                alt={'Dr. Kalpana Sundar - About'}
                            />
                        </div>
                        <div className="lg:w-4/5 w-full">
                            <div className='lg:text-3xl text-2xl text-gray.500 tracking-wide  bg-gray.100 lg:p-12 p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            <p className="lg:p-12 p-4 pt-6">Lorem ipsum, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-12">
                <div className="flex flex-col ">
                    <div className="flex max-w-7xl mx-auto lg:px-0 md:px-12 px-4 lg:flex-row flex-col">
                        <div className=''>
                            <img
                                src="/image/placeholder-01.jpg"
                                width={1000}
                                alt={'Dr. Kalpana Sundar - About'}
                            />
                        </div>
                        <div className="lg:w-4/5 w-full lg:pt-0">
                            <div className='lg:text-3xl text-2xl text-gray.500 tracking-wide  bg-gray.100 lg:p-12 p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            <div className="lg:p-12 p-4 pt-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-gray.050 ">
                <BookACall_07/>
            </div>
        </Layout>
    )
}



