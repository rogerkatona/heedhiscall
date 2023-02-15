import inTheMediaItems from "../data/inTheMediaItems";
import Date from "./date";

export default function InTheMediaItem(props) {

    let filteredItem = inTheMediaItems.filter(function (item){
        return item.isFeatured === props.isFeatured
    });

    return (
        <>
            <section className="py-6 bg-gray.100">
                {filteredItem
                    .filter(filteredItem => filteredItem.type === props.type)
                    .sort((a, b) => {
                        if (a.date < b.date) {
                            return 1
                        } else {
                            return -1
                        }
                    })
                    .map(filteredItem => (
                        <section
                            key={filteredItem.id}
                            className={`flex flex-col p-6 ${filteredItem.featuredID % 2 !== 0  ? 'bg-gray.100' : 'bg-gray.100'}`}>

                            <div className={`flex  flex-col  max-w-7xl mx-auto  ${filteredItem.featuredID % 2 !== 0  ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                <div className=''>
                                    <img
                                        src={filteredItem.src}
                                        width={1000}
                                        alt={'Featured Media'}
                                    />
                                </div>
                                <div className={`lg:w-4/5 w-full lg:pt-0 pt-6 ${filteredItem.featuredID % 2 !== 0  ? 'lg:pl-6' : 'lg:pr-6'}`}>
                                    <div className='font-bebasNeue text-4xl text-gray.400 font-light border-b'>{filteredItem.number}</div>
                                    <div className='font-bebasNeue text-4xl text-gray.700 pt-4'>
                                        {filteredItem.title}
                                    </div>
                                    <div className={` text-xs uppercase ${filteredItem.type === 'about'  ? 'hidden' : 'block'}`}>
                                        <Date dateString={filteredItem.date} />
                                    </div>
                                    <div className='text-gray.700 py-4 '>{filteredItem.description}</div>
                                    <div className="flex flex-row">
                                        <div className={`${filteredItem.isButtonActive === 'true'  ? 'block' : 'hidden'} `}>
                                            <a href={filteredItem.buttonHref} target="_blank" rel="noreferrer">
                                                <button className="hover:bg-rust.800 hover:text-white.100 text-xs text-rust.700 uppercase px-4 py-3 border border-rust.500 rounded-lg">
                                                    {filteredItem.buttonText}
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
            </section>
        </>
    )
}






