

export default function HeroIndex() {

    return (
        <section className="flex flex-row min-h-screen60vh max-h-screen60vh bg-blue.600">

            <div className="flex flex-col justify-center items-center text-center max-w-7xl mx-auto lg:px-0 px-6">

{/*                <div className="font-bebasNeue text-gray.200 text-xl">
                    Featured video
                </div>*/}
                <div className="font-bebasNeue text-gray.100 md:text-4xl text-4xl ">
                    Heed
                </div>
                <div className="text-gray.300 md:text-2xl pb-4">
                   A nonprofit corporation
                </div>

                <div className="flex space-x-2">
                        <a
                            className="hover:bg-rust.800 text-white.100 text-xs uppercase hover:text-gray-50 px-4 py-3 bg-rust.500 rounded-lg"
                            href="https://calendly.com/drkalpanasundar"
                            target="_blank"
                            rel="noreferrer">
                            Donate
                        </a>
                </div>
            </div>

        </section>
    )}
