

export default function HighlightQuote02() {
    return (
        <section className="bg-tan.100  my-20 max-w-7xl mx-auto">
            <div className="flex flex-col justify-center items-center p-12 pt-6 relative">
                <div className='flex flex-shrink-0 absolute -top-10'>
                    <img
                        src="/image/quoteGraphic_tan.png"
                        height={82}
                        width={82}
                        alt={'simple quote graphic'}
                    />
                </div>
                <div className="flex flex-col pt-12">
                <span className="text-lg">
                        &quot;Dr. Sundar captured and engaged our client`&apos;s attention at our annual appreciation event.  Every person that was at the presentation walked away with important material facts on how to take care of themselves, how to focus on the things that really matter, and how to block out the noise that many people pay too much attention to. Can`&apos;t wait to have her back!&quot;
                    </span>
                    <span className="font-bold text-sm mt-2">
                        Joe McKinley  <br/>
                        <span className="font-light">Financial Advisor
                    </span>
                    </span>
                </div>
            </div>
        </section>
    )
}






