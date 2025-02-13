import ItemList from "./ItemList";

const RestaurantCategory = (data) => {
    return (
        <div className="category">
        {/* Header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between">
        <span className="font-bold text-l">{data.data.title} ({data.data.itemCards.length})</span>
        <span>⬇️</span>
        </div>
            <ItemList items={data.data.itemCards}/>
        </div>
        </div>
    );
};

export default RestaurantCategory;