

export default function HighlightQuote01() {
    return (
        <section className="bg-tan.100 m-12 mt-20">
            <div className="flex flex-col justify-center items-center  p-12 pt-6 relative">
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
                        &quot;From the moment Kalpana stepped in front of the camera, she grabbed my attention with not only her presence,
                    but her energy which is infectious and leaves a lasting impression on all who hear her speak.&quot;
                    </span>
                    <span className="font-bold text-sm mt-2">
                        Adrienne Houghton  <br/>
                        <span className="font-light">Host Buzz TV
                    </span>
                    </span>
                </div>
            </div>
        </section>
    )
}






