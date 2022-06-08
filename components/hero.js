import heroItems from "../data/heroItems";


export default function Hero(props) {

    let filteredItem = heroItems.filter(function (item){
        return item.id === props.id
    })

    return (
        <>
            {filteredItem.map(filteredItem => (
                <section key={filteredItem.id} className="flex flex-col justify-center h-full">
                    <div className="bg-gray.050 bg-opacity-60  w-2/3 p-12">
                        <div className='font-bebasNeue text-7xl uppercase text-blue.700'>{filteredItem.label}</div>
                        <div className="text-xl text-gray.700">{filteredItem.description}</div>
                    </div>
                </section>
            ))}
        </>
    )
}