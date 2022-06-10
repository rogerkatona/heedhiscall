import serviceItems from "../data/serviceItems";
import Link from "next/link";
import Date from "./date";

export default function Features(props) {

    let filteredItem = serviceItems.filter(function (item){
        return item.featured === props.featured
    });

    return (
        <>
                {filteredItem
                    .filter(filteredItem => filteredItem.type === props.type)
                    .map(filteredItem => (

                        <section
                            key={filteredItem.id}
                            className={`flex flex-col p-12 ${filteredItem.featuredID % 2 !== 0  ? 'bg-rust.050' : 'bg-teal.050'}`}>

                            <div className={`flex max-w-7xl mx-auto ${filteredItem.featuredID % 2 !== 0  ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div className=''>
                                    <img
                                        src={filteredItem.src}
                                        height={540}
                                        width={865}
                                        alt={'Featured Article'}
                                    />
                                </div>
                                <div className={` w-1/3 ${filteredItem.featuredID % 2 !== 0  ? 'pl-6' : 'pr-6'}`}>
                                    <div className='text-rust.700'>
                                        <Link href={filteredItem.featuredHREF}>
                                            <a className='hover:underline uppercase text-xs'>{filteredItem.featuredURL}</a>
                                        </Link>
                                    </div>
                                    <div className='font-bebasNeue text-4xl text-gray.700 pb-4'>
                                        {filteredItem.featuredHeader}
                                    </div>
                                    <div className='text-xl text-gray.700'>
                                        {filteredItem.title}
                                    </div>
                                    <div className='text-xs pt-1 uppercase'>
                                        <Date dateString={filteredItem.date} />
                                    </div>
                                    <div className='text-gray.700 py-4 '>{filteredItem.description}</div>
                                    <Link href={`/speaker`}>
                                        <button className="hover:bg-rust.800 hover:text-white.100 text-xs text-rust.700 uppercase px-4 py-3 border border-rust.500 rounded-lg">
                                            See all
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    ))}
        </>
    )
}






