

export default function HighlightQuote03() {
    return (
        <section className="bg-teal.100 m-12 mt-20">
            <div className="flex flex-col justify-center items-center  p-12 pt-6 relative">
                <div className='flex flex-shrink-0 absolute -top-10'>
                    <img
                        src="/image/quoteGraphic_teal.png"
                        height={82}
                        width={82}
                        alt={'simple quote graphic'}
                    />
                </div>
                <div className="flex flex-col pt-12">
                <span className="text-lg">
                        &quot;In television news, when you interview an expert you need them to be clear, concise and relatable. When on my news program, Kalpana took complex issues and made them understandable. She definitely has an ability to tell a story and her passion and audience awareness shines.&quot;
                    </span>
                    <span className="font-bold text-sm mt-2">
                        Bruce Hamilton  <br/>
                        <span className="font-light">News Anchor WJXT
                    </span>
                    </span>
                </div>
            </div>
        </section>
    )
}






