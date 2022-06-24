import gridItems from "../data/gridItems";


export default function GridMedia(props) {

    return (
        <>
            <section className="bg-gray.050">
                <div  className="flex py-12 lg:py-12">
                    <div className="grid xl:grid-cols-3 gap-12 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto xl:px-0 px-12">
                        {gridItems
                            .filter(filteredItem => filteredItem.type === props.type)
                            .map(gridItems => (

                                <div key={gridItems.id} className="">
                                    <div className='pb-2 relative blur-md'>

                                        <img
                                            className="w-full"
                                            src={gridItems.src}
                                            alt={gridItems.alt}
                                        />
                                        <a
                                            href={gridItems.buttonHref}
                                            target={gridItems.target}
                                            rel="noreferrer"
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                <button className="bg-rust.700 hover:bg-rust.900 text-white.100 text-xs  uppercase px-4 py-3  rounded-lg">
                                                    {gridItems.buttonText}
                                                </button>
                                        </a>
                                    </div>
                                    <div className="">
                                        <div className="uppercase text-xs font-medium">
                                            <a
                                                href={gridItems.buttonHref}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-rust.700 hover">
                                                {gridItems.title}
                                            </a>

                                        </div>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
             </section>
        </>
    )
}






