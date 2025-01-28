import {RestaurantCard} from "../components/RestaurantCard.jsx";
import { useEffect, useState } from "react";

const Body = () => {
    const [listofRestaurants, setlistofRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try { 
            const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
            const data = await res.json();
            console.log(data);
            const restaurantCards = data?.data?.cards.slice(3, 10)
                .map(card => card?.card?.card);
                
            setlistofRestaurants(restaurantCards);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Early return if no restaurants
    if(listofRestaurants.length === 0) {
        return <h2>Loading...</h2>;
    }

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listofRestaurants.filter(
                        (res) => res.info.avgRating >= 4.5
                    );
                    setlistofRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {Array.isArray(listofRestaurants) && listofRestaurants.map((restaurant) => (
                    <RestaurantCard 
                        key={restaurant?.info?.id} 
                        resData={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;