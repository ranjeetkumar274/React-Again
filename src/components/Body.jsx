// Importing necessary modules and components

import {RestaurantCard} from "../components/RestaurantCard.jsx"; // Importing RestaurantCard component
import { useEffect, useState } from "react";  // Importing useEffect and useState hooks from React
import Shimmer from "./Shimmer.jsx"; // Importing Shimmer component for loading state
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";
import { RES_API } from "../utils/constants.jsx";
import { withPromotedLabel } from "../components/RestaurantCard.jsx";


// Body component definition
const Body = () => {
        // State variables
    const [listofRestaurants, setlistofRestaurants] = useState([]); // State to store the list of restaurants
    const [filteredRestaurants, setfilteredRestaurants] = useState([]); // State to store the filtered list of restaurants
    const [searchtext, setsearchtext] = useState("");  // State to store the search text
    const online = useOnlineStatus();
    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
    


    // Whenever state variable updates , react triggers a reconciliation cycling(re-renders the components)
       // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        fetchData(); // Fetch data from the API
    }, []); // Empty dependency array means this effect runs only once after the initial render


    // Function to fetch data from the API
    const fetchData = async () => {
        try { 
            // Fetching data from the Swiggy API
            const res = await fetch(RES_API); // Fetching data from the API
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

    
    if(online === false) return <h1>Looks like you are disconnected from Internet!!! Please Check Your Internet!!</h1>
    

    // Early return if no restaurants
    if(listofRestaurants.length === 0) {
        return <Shimmer />;
    }

    // otherwise, return the list of restaurants
    return(
        <div className="body">
            <div className="flex items-center justify-center bg-red-300">
                

                {/* Search Button */}
                <div className="search m-4 p-4 gap-6">
                    <input type="text" className=" border-none w-80 h-10 m-4" 
                    value={searchtext}
                    onChange={(e) => {
                        setsearchtext(e.target.value);
                        console.log(e.target.value);
                        const filteredListofrestaurants = listofRestaurants.filter((res) =>res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                    );
                        setfilteredRestaurants(filteredListofrestaurants);
                    }}/>

                     {/* Button to filter restaurants based on search text */}
                    <button className="px-4 py-2 bg-green-100 " onClick={() => {
                        const filteredListofrestaurants = listofRestaurants.filter((res) =>res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                    );
                        setfilteredRestaurants(filteredListofrestaurants);
                    }}>Search</button>
                </div>

                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                    const filteredList = listofRestaurants.filter(
                        (res) => res.info.avgRating >= 4.0
                    );
                    setfilteredRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
                </div>
            </div>

            {/* Rendering the list of restaurant cards */}
                <div className="flex flex-wrap justify-center items-center bg-red-300 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> 
                    {Array.isArray(filteredRestaurants) && filteredRestaurants.map((restaurant) => (
                        <Link key={restaurant?.info?.id} to={`/restaurants/${restaurant?.info?.id}`}>
                        <RestaurantCard 
                            resData={restaurant}
                        /></Link>
                        
                    ))}
                    {Array.isArray(filteredRestaurants) && filteredRestaurants.map((restaurant) => (
                        <Link key={restaurant?.info?.id} to={`/restaurants/${restaurant?.info?.id}`}>
                        {restaurant.info.promoted ? ( <PromotedRestaurantCard resData={restaurant}/> ) : (
                        <RestaurantCard 
                            resData={restaurant}
                        /> )} </Link>
                        
                    ))}
                    </div>
                </div>
        </div>
    );
};

export default Body; // Exporting the Body component as default 