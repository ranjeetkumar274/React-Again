// Importing necessary modules and components

import {RestaurantCard} from "../components/RestaurantCard.jsx"; // Importing RestaurantCard component
import { useEffect, useState } from "react";  // Importing useEffect and useState hooks from React
import Shimmer from "./Shimmer.jsx"; // Importing Shimmer component for loading state
import { Link } from "react-router-dom";


// Body component definition
const Body = () => {
        // State variables
    const [listofRestaurants, setlistofRestaurants] = useState([]); // State to store the list of restaurants
    const [filteredRestaurants, setfilteredRestaurants] = useState([]); // State to store the filtered list of restaurants
    const [searchtext, setsearchtext] = useState("");  // State to store the search text

    // Whenever state variable updates , react triggers a reconciliation cycling(re-renders the components)
       // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        fetchData(); // Fetch data from the API
    }, []); // Empty dependency array means this effect runs only once after the initial render


    // Function to fetch data from the API
    const fetchData = async () => {
        try { 
            // Fetching data from the Swiggy API
            const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
            const data = await res.json(); // Parsing the JSON response

            // Extracting restaurant cards from the API response using optional chaining
            const restaurantCards = data?.data?.cards.slice(3, 10)
                .map(card => card?.card?.card);
                
                // Updating state variables with the fetched data
            setlistofRestaurants(restaurantCards); // Setting the list of restaurants
            setfilteredRestaurants(restaurantCards); // Setting the filtered list of restaurants
        }
        catch (error) {
            console.error("Error fetching data:", error); // Logging any errors that occur during the fetch operation
        }
    };

    // Early return if no restaurants
    if(listofRestaurants.length === 0) {
        return <Shimmer />;
    }

    // otherwise, return the list of restaurants
    return(
        <div className="body">
            <div className="filter">

                {/* Search Button */}
                <div className="search">
                    <input type="text" className="search-box" 
                    value={searchtext}
                    onChange={(e) => {
                        setsearchtext(e.target.value);
                        console.log(e.target.value);
                        const filteredListofrestaurants = listofRestaurants.filter((res) =>res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                    );
                        setfilteredRestaurants(filteredListofrestaurants);
                    }}/>

                     {/* Button to filter restaurants based on search text */}
                    <button className="search-btn" onClick={() => {
                        const filteredListofrestaurants = listofRestaurants.filter((res) =>res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                    );
                        setfilteredRestaurants(filteredListofrestaurants);
                    }}>Search</button>

                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listofRestaurants.filter(
                        (res) => res.info.avgRating >= 4.5
                    );
                    setfilteredRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>

            {/* Rendering the list of restaurant cards */}
            <div className="res-container">
                {Array.isArray(filteredRestaurants) && filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant?.info?.id} to={`/restaurants/${restaurant?.info?.id}`}>
                    <RestaurantCard 
                        resData={restaurant}
                    /></Link>
                    
                ))}
            </div>
        </div>
    );
};

export default Body; // Exporting the Body component as default 