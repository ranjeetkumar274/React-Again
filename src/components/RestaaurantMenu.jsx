import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    // Show loading shimmer while the data is being fetched
    if (resInfo === null) return <Shimmer />;

    // Destructure values safely
    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};   
    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

    // console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []);

    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((menu) => menu?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories);
    

    // Check if itemCards is an array
    if (!Array.isArray(itemCards)) {
        return <div>Menu items are not available</div>;
    }

    return (
        <div className="text-center py-6">
            <h1 className="font-bold text-2xl pb-3">{name}</h1>
            <p className="font-bold text-l">{cuisines?.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category) => (
                <RestaurantCategory key={category?.card?.card?.id} data={category?.card?.card} />   
            ))};
        </div>
    );
};

export default RestaurantMenu;
