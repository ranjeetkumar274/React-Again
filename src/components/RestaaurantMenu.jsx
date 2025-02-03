import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantmenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    // Show loading shimmer while the data is being fetched
    if (resInfo === null) return <Shimmer />;

    // Destructure values safely
    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};   
    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

    // Check if itemCards is an array
    if (!Array.isArray(itemCards)) {
        return <div>Menu items are not available</div>;
    }

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item, index) => {
                    const { name, price } = item.card.info || {};
                    return (
                        <li key={index}>
                            <p>{name} . Rs.{price ? price / 100 : "N/A"}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
