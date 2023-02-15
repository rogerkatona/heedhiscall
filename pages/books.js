import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";
import BookACall_07 from "../components/bookACall_07";


export default function Books() {

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <header className="bg-hero-books min-h-screen25vh max-h-screen25vh bg-cover bg-left bg-no-repeat flex flex-col justify-center">
                <Hero id={7}/>
            </header>
            {/*            <div className='font-bebasNeue text-6xl uppercase text-gray.700 flex flex-row justify-center py-12'>Welcome!</div>
            <div className='max-w-7xl mx-auto pb-12 lg:px-0 px-12 '>
                <img
                    className=""
                    src="/image/videoThumbnail-01.png"
                    alt="Alt"
                />
            </div>*/}
            <div className='font-bebasNeue text-6xl uppercase text-gray.700 flex flex-row justify-center text-center bg-gray.100 py-12'>Beauty Unbound</div>
    <section className="pt-12">
        <div className="flex flex-col">
            <div className="flex max-w-7xl mx-auto lg:px-0 md:px-12 px-4 lg:flex-row-reverse flex-col">
                <div className=''>
                    <img
                        src="/image/book_beautyUnbound-01.jpg"
                        width={750}
                        alt={'Dr. Kalpana Sundar - About'}
                    />
                </div>
                <div className="lg:w-5/6 w-full">
                    <div className='lg:text-3xl text-2xl text-gray.500 tracking-wide  bg-gray.100 lg:p-12 p-4'>Would you like to design a life in which you use your greatest and most unique strengths to help yourself and others? </div>
                    <p className=" py-6">Traditions of society often encourage &quot;responsible&quot; adults to suppress their individual dreams and distinctive gifts. By doing so, we are told that the sacrifice of ourselves will result in greater good for our family, friends, and society as a whole. We are not told, however, that setting aside our unique selves puts us in a minimalistic, tightly controlled box. Our dreams go unfulfilled, our unique strengths are weakened, and the quality of our lives is diminished.
                    </p>
                    <div>
                        <a
                            href="https://www.amazon.com/Beauty-Unbound-Breaking-Living-Unapologetically/dp/1735473804/ref=sr_1_1?crid=35PUHTTWN0FYH&keywords=beauty+unbound&qid=1676472013&s=books&sprefix=beauty+unbound%2Cstripbooks%2C105&sr=1-1"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:bg-rust.800 text-white.100 text-xs uppercase hover:text-gray-50 px-4 py-3 bg-rust.500 rounded-lg">
                            Purchase on amazon
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="pt-24">
        <div className="flex flex-col ">
            <div className="flex max-w-7xl mx-auto lg:px-0 md:px-12 px-4 lg:flex-row flex-col">
                <div className=''>
                    <img
                        src="/image/book_beautyUnbound-02.jpg"
                        width={750}
                        alt={'Dr. Kalpana Sundar - About'}
                    />
                </div>
                <div className="lg:w-5/6 w-full lg:pt-0">
                    <div className='lg:text-3xl text-2xl text-gray.500 tracking-wide  bg-gray.100 lg:p-12 p-4'>When we learn to follow our dreams and nourish our uniqueness, we can find fulfillment, authenticity and Beauty Unbound.</div>
                    <div >
                        <p className="py-6">By breaking out of this restrictive box, we have the power to nurture our dreams and unleash our strengths. Life can be fulfilling and authentic.  Freedom gives us the opportunity to pursue our own definition of success. Responsibility to society comes more naturally when we live our lives to the fullest and inspire others to do so.
                        </p>
                        <div>
                            <a
                                href="https://www.amazon.com/Beauty-Unbound-Breaking-Living-Unapologetically/dp/1735473804/ref=sr_1_1?crid=35PUHTTWN0FYH&keywords=beauty+unbound&qid=1676472013&s=books&sprefix=beauty+unbound%2Cstripbooks%2C105&sr=1-1"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:bg-rust.800 text-white.100 text-xs uppercase hover:text-gray-50 px-4 py-3 bg-rust.500 rounded-lg">
                                Purchase on amazon
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="pt-24">
        <div className="flex flex-col pb-12 ">
            <div className="flex max-w-7xl mx-auto lg:px-0 md:px-12 px-4 lg:flex-row-reverse flex-col">
                <div className=''>
                    <img
                        src="/image/book_beautyUnbound-03.jpg"
                        width={750}
                        alt={'Featured Article'}
                    />
                </div>
                <div className="lg:w-5/6 w-full lg:pt-0 ">
                    <div className='lg:text-3xl text-2xl text-gray.500 tracking-wide  bg-gray.100 lg:p-12 p-4'>About the author</div>
                    <div>
                        <p className='py-6'>Dr. Sundar achieved the life of her dreams: a successful medical practice, a family, and material possessions that indicated high achievement. And yet she felt unfulfilled and unsatisfied. Dr. Sundar struggled with burnout from living a life focused on overachieving. After battling cancer at the age of thirty-four, her perspective changed. Recognizing that she was bound to her career, her relationships, and to society’s expectations, she felt trapped in a life that didn’t feel like her own. Through the pages of Beauty Unbound, share Dr. Sundar’s  journey from the dark places of self-repression to the freedom of becoming her most authentic self.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
{/*            <div className="bg-gray.050 ">
            <BookACall_07/>
            </div>*/}
        </Layout>
    )
}