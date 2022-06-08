import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import HeroIndex from "../components/hero_index"
import HighlightMissionStatement from "../components/highlightMissionStatement";
import HighlightQuote01 from "../components/highlightQuote01";
import HighlightBookACall01 from "../components/highlightBookACall01";
import HighlightTakeQuiz01 from "../components/highlightTakeQuiz01";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {

  let featuredPosts = allPostsData.filter(function (featured){
    return featured.isFeatured === 'true'
  })

  return (
    <Layout className="flex flex-col items-center justify-center ">
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <HeroIndex/>
        <HighlightMissionStatement/>
        <section className='bg-rust.050 p-12'>
            {
                featuredPosts
                    .filter(featured => featured.type === 'articles')
                    .map(featured =>

                        <div key={featured.id} className='flex lg:flex-row lg:flex-row-reverse flex-col '>
                            <div className='flex'>
                                <img
                                    src="/image/0.3-confSpeaker.png"
                                    height={750}
                                    width={1770}
                                    alt={'Featured Article'}
                                />
                            </div>
                            <div className='pr-6'>
                                <div className='text-rust.700'>
                                    <Link href={`/articles/${featured.id}`}>
                                        <a className='hover:underline uppercase text-xs'>/Conference Speaker</a>
                                    </Link>
                                </div>
                                <div className='font-bebasNeue text-4xl text-gray.700 pb-4'>
                                  Featured Opening Keynote
                                </div>
                                <div className='text-xl text-gray.700'>
                                    {featured.title}
                                </div>
                                <div className='text-xs pt-1'>
                                    <Date dateString={featured.date} />
                                </div>
                                <div className='text-gray.700 py-4 '>{featured.description}</div>
                                <Link href={`/articles/${featured.id}`}>
                                    <button className="hover:bg-rust.800 hover:text-white text-xs text-rust.700 uppercase px-4 py-3 border border-rust.500 rounded-lg">
                                        See all conference speaker offerings
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}
        </section>
      <HighlightQuote01/>
      <section className='bg-teal.050 p-12'>
        {
          featuredPosts
              .filter(featured => featured.type === 'work')
              .map(featured =>

                  <div key={featured.id} className='flex lg:flex-row flex-col  '>
                    <div className='flex'>
                      <img
                          src={featured.bannerSMImageSource}
                          height={750}
                          width={1770}
                          alt={'Featured Article'}
                      />
                    </div>
                    <div className='lg:pl-12 lg:py-0 pt-6 pb-0'>
                      <div className='text-rust.700'>
                        <Link href={`/articles/${featured.id}`}>
                          <a className='hover:underline uppercase text-xs'>/Workshops</a>
                        </Link>
                      </div>
                      <div className='font-bebasNeue text-4xl text-gray.700 pb-4'>
                        Featured Workshop
                      </div>
                      <div className='text-xl'>
                        {featured.title}
                      </div>
                      <div className='text-secondary text-xs'>
                        <Date dateString={featured.date} />
                      </div>
                      <div className='text-gray.700 py-4 '>{featured.description}</div>
                      <Link href={`/articles/${featured.id}`}>
                        <button className="hover:bg-rust.800 hover:text-white text-xs text-rust.700 uppercase px-4 py-3 border border-rust.500 rounded-lg">
                          See all workshops
                        </button>
                      </Link>
                    </div>
                  </div>
              )}
      </section>
        <HighlightBookACall01/>
        <section className='bg-gray.500 p-12'>
            {
                featuredPosts
                    .filter(featured => featured.type === 'articles')
                    .map(featured =>

                        <div key={featured.id} className='flex lg:flex-row lg:flex-row-reverse flex-col '>
                            <div className='flex'>
                                <img
                                    src={featured.bannerSMImageSource}
                                    height={750}
                                    width={1770}
                                    alt={'Featured Article'}
                                />
                            </div>
                            <div className='pr-6'>
                                <div className='text-gray.300'>
                                    <Link href={`/articles/${featured.id}`}>
                                        <a className='hover:underline uppercase text-xs'>/Articles</a>
                                    </Link>
                                </div>
                                <div className='font-bebasNeue text-4xl text-gray.200 pb-4'>
                                    Featured Article
                                </div>
                                <div className='text-xl text-gray.200'>
                                    {featured.title}
                                </div>
                                <div className='text-xs pt-1 text-gray.300'>
                                    <Date dateString={featured.date} />
                                </div>
                                <div className='text-gray.200 py-4 '>{featured.description}</div>
                                <Link href={`/articles/${featured.id}`}>
                                    <button className="hover:bg-rust.800 hover:text-white hover:border-rust.800 text-xs text-gray.200 uppercase px-4 py-3 border border-gray.200 rounded-lg">
                                        Continue Reading
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}
        </section>
        <HighlightTakeQuiz01/>
    </Layout>
  )
}
