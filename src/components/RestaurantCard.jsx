export const RestaurantCard = ({resData}) =>{
    const { 
        name, 
        cloudinaryImageId, 
        cuisines,
        avgRating,
        sla 
    } = resData?.info;

    return(
        <div className="m-4 p-4 w-[250px] h-[420px] bg-gray-200 rounded-lg hover:shadow-lg hover:bg-gray-3 00">
            <img 
                className="rounded-lg h-[200px] w-full object-cover" 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}  // Modified image URL
                alt={name}
            />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4 className=" text-slate-600">{cuisines.join(", ")}</h4>
            <div className="bg-green-200 w-[60px] rounded-lg items-center justify-center flex my-2">
            <h4 className="font-bold">{avgRating} ⭐</h4>
            </div>
            <h4>Will be Dilivered in : </h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
        
    )
};
