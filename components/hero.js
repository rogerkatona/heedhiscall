import heroItems from "../data/heroItems";


export default function Hero(props) {

    let filteredItem = heroItems.filter(function (item){
        return item.id === props.id
    })

    return (
        <>
            <section className="flex flex-row max-w-7xl mx-auto">
            {filteredItem.map(filteredItem => (
                <section
                    key={filteredItem.id}
                    className="">
                   <div className="">
                        <div className='font-bebasNeue md:text-7xl text-6xl uppercase text-white.100 text-center'>{filteredItem.label}</div>
                        <div className="text-gray.300 text-center font-medium">{filteredItem.description}</div>
                    </div>
                </section>
            ))}
        </section>
            </>
    )
}