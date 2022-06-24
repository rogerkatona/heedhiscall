
export default function ClientLogos({ children, type }) {
    return (
        <section className="bg-gray.050">
        <div className="mx-auto max-w-7xl">
            <section className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 items-center md:gap-10 gap-0 justify-items-center md:py-6 md:px-12 md:px-6 ">
                <div>
                    <img
                        src="image/shefinds.webp"
                        height={132}
                        width={200}
                        alt={'She Finds'}
                    />
                </div>
                <div>
                    <img
                        src="/image/huffpost.webp"
                        height={132}
                        width={200}
                        alt={'Huffington Post'}
                    />
                </div>
                <div>
                    <img
                        src="/image/sheknows.webp"
                        height={132}
                        width={200}
                        alt={'She Knows'}
                    />
                </div>
                <div>
                    <img
                        src="/image/Bustle.webp"
                        height={132}
                        width={200}
                        alt={'Bustle'}
                    />
                </div>
            </section>
        </div>
        </section>
    )
}






