export const RestaurantCard = ({resData}) =>{
    const { 
        name, 
        cloudinaryImageId, 
        cuisines,
        avgRating,
        sla 
    } = resData?.info;

    return(
        <div className="res-card">
            <img 
                className="res-logo" 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}  // Modified image URL
                alt={name}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
};
