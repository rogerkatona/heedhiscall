import plannerResourceItems from "../data/plannerResourceItems";
import Link from "next/link";

export default function PlannerResources() {

    return (
        <>
            <section className="bg-gray.050 pt-12">
                {plannerResourceItems
                    .map(plannerItems => (
                        <section
                            key={plannerItems.id}
                            className="flex flex-col pb-12 ">

                            <div className={`flex max-w-7xl mx-auto lg:px-0 px-12 ${plannerItems.id % 2 !== 0  ? 'lg:flex-row  flex-col' : 'lg:flex-row-reverse flex-col'}`}>
                                <div className=''>
                                    <img
                                        src={plannerItems.src}
                                        height={540}
                                        width={865}
                                        alt={'Featured Article'}
                                    />
                                </div>
                                <div className={` lg:w-4/5 w-full pt-6 ${plannerItems.id % 2 !== 0  ? 'lg:pl-6' : 'lg:pr-6'}`}>
                                    <div className='text-2xl text-gray.700 '>{plannerItems.title}</div>
                                    <p className="pb-6">{plannerItems.description}</p>
                                    <a
                                        href={plannerItems.buttonHref}
                                        target="_blank"
                                        rel="noreferrer">
                                        <button className="hover:bg-rust.800 hover:text-white.100 text-xs text-rust.700 uppercase px-4 py-3 border border-rust.500 rounded-lg">
                                            {plannerItems.buttonText}
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </section>
                    ))}
                </section>
        </>
    )
}






