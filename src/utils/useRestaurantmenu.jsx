import { MENU_API } from "./constants";
import { useState, useEffect } from "react";    

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    
    useEffect(()=> {
        fetchMenu();
    } , []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    };
    return resInfo;
};

export default useRestaurantMenu; // Exporting the useRestaurantMenu hook as default