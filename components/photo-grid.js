import photoGridItems from "../data/photoGridItems";
import Link from "next/link";

export default function photoGrid() {

    return (
        <>
            <section className="bg-gray.050">
                <div  className="flex py-12 lg:py-12">
                    <div className="grid xl:grid-cols-3 gap-12 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto px-12">
                        {photoGridItems
                            .map(photoGridItems => (

                                <div key={photoGridItems.id} className="">
                                    <div className='pb-4'>
                                        <img
                                            src={photoGridItems.src}
                                            alt={photoGridItems.alt}
                                        />
                                    </div>
                                    <div className="">
                                        <Link href={photoGridItems.buttonHref}>
                                            <button className="hover:bg-rust.800 hover:text-white.100 text-xs text-rust.700 uppercase px-4 py-3 border border-rust.500 rounded-lg">
                                                {photoGridItems.buttonText}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
             </section>
        </>
    )
}






