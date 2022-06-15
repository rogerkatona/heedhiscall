import aboutItems from "../data/aboutItems";
import Link from "next/link";


export default function AboutItem(props) {

    let filteredItem = aboutItems.filter(function (item){
        return item.id === props.id
    });


    return (

        <>
            <section className="pt-12">
                {aboutItems
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
                                <div className={`lg:w-4/5 w-full lg:pt-0 pt-6 ${plannerItems.id % 2 !== 0  ? 'lg:pl-6' : 'lg:pr-6'}`}>
                                    <div className='text-2xl text-gray.700 '>{plannerItems.title}</div>
                                    <div className="text text-gray.700 pt-2 pb-6">{plannerItems.description}</div>
                                </div>
                            </div>
                        </section>
                    ))}
            </section>
        </>

    )
}






