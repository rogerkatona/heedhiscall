import serviceItems from "../data/serviceItems";

export default function Services(props) {

    let filteredItem = serviceItems.filter(function (item){
        return item.type === props.type
    });

    return (
        <>
                <section className="flex flex-col px-12 pt-12 bg-gray.100">
                    {filteredItem
                        .filter(filteredItem => filteredItem.subtype === props.subtype)
                        .map(filteredItem => (
                            <div
                                key={filteredItem.id}
                                className={`flex flex-row pb-12 max-w-7xl mx-auto ${filteredItem.id % 2 === 0  ? 'flex-row-reverse' : ''}`}>

                                <div className="">
                                    <img
                                        className=""
                                        src={filteredItem.src}
                                        alt={filteredItem.alt}
                                    />
                                </div>
                                <div
                                    className={`${filteredItem.id % 2 === 0  ? 'pr-12' : 'pl-12'} w-1/3`}>
                                    <div className='font-bebasNeue text-4xl text-gray.400 font-light border-b'>{filteredItem.number}</div>
                                    <div className='text-2xl text-gray.700 pt-4'>{filteredItem.title}</div>
                                    <div className="text text-gray.700 pt-2">{filteredItem.description}</div>
                                </div>
                            </div>
                    ))}
                </section>
        </>
    )
}






