import plannerResourceItems from "../data/plannerResourceItems";
import Link from "next/link";

export default function PlannerResources() {

    return (
        <>
            <section className="bg-rust.050 pt-12">
                {plannerResourceItems
                    .map(plannerItems => (
                        <section
                            key={plannerItems.id}
                            className="flex flex-col pb-12 ">

                            <div className={`flex max-w-7xl mx-auto ${plannerItems.id % 2 !== 0  ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div className=''>
                                    <img
                                        src={plannerItems.src}
                                        height={540}
                                        width={865}
                                        alt={'Featured Article'}
                                    />
                                </div>
                                <div className={` w-1/3 ${plannerItems.id % 2 !== 0  ? 'pl-6' : 'pr-6'}`}>
                                    <div className='text-2xl text-gray.700 '>{plannerItems.title}</div>
                                    <div className="text text-gray.700 pt-2 pb-6">{plannerItems.description}</div>
                                    <Link href={plannerItems.buttonHref}>
                                        <button className="hover:bg-rust.800 hover:text-white.100 text-xs text-rust.700 uppercase px-4 py-3 border border-rust.500 rounded-lg">
                                            {plannerItems.buttonText}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    ))}
                </section>
        </>
    )
}






