import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
return(
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://th.bing.com/th/id/OIP.xRrzWLm-NnuaLrJShnaPsAHaHa?rs=1&pid=ImgDetMain"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)
};



const restaurantData = [
    {
            "info": {
                "id": "333677",
                "name": "Wat-A-Burger! - India Ka Burger",
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/22/0438b481-ff18-48f2-b8c5-56297101c40f_8eab0d79-e411-4ff6-9b85-4b02aa637cd9.jpg",
                "locality": "Hazratganj",
                "areaName": "Hazratganj",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Burgers",
                    "Fast Food",
                    "Continental",
                    "American",
                    "Beverages",
                    "Desserts"
                ],
                "avgRating": 4.2,
                "sla": {
                    "deliveryTime": 39
                }
            }
        },
         {
        "info": {
            "id": "532693",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/2f068dfd-4cfd-4833-8c6d-a20f5cf709ff_532693.JPG",
            "locality": "Habibullah Estate Road",
            "areaName": "Hazratganj",
            "costForTwo": "₹400 for two",
            "cuisines": ["American"],
            "avgRating": 4.4,
            "sla": {
                "deliveryTime": 30
            }
        }
    },
    {
        "info": {
            "id": "83224",
            "name": "Al Baike Arabecue",
            "cloudinaryImageId": "gqllu2qnsrawyuk4op5x",
            "locality": "Chowk",
            "areaName": "Chowk",
            "costForTwo": "₹200 for two",
            "cuisines": ["Snacks", "Fast Food", "Burgers", "Continental", "Mughlai", "Biryani", "American"],
            "avgRating": 4.4,
            "sla": {
                "deliveryTime": 23
            }
        }
    },
    {
        "info": {
            "id": "803172",
            "name": "Burger King",
            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
            "locality": "CHOWK",
            "areaName": "Lucknow",
            "costForTwo": "₹350 for two",
            "cuisines": ["Burgers", "American"],
            "avgRating": 4.4,
            "sla": {
                "deliveryTime": 17
            }
        }
    },
    {
        "info": {
            "id": "66671",
            "name": "Mr. Brown - Danbro",
            "cloudinaryImageId": "2c469b5d88f84b7495b9825d06e4bb9b",
            "locality": "Hazratganj",
            "areaName": "Hazratganj",
            "costForTwo": "₹350 for two",
            "cuisines": ["Bakery", "Italian", "Continental", "Pizzas", "Burgers", "Beverages", "Cakes & Pastries"],
            "avgRating": 4.7,
            "sla": {
                "deliveryTime": 38
            }
        }
    },
    {
        "info": {
            "id": "748511",
            "name": "Rominus Pizza And Burger",
            "cloudinaryImageId": "df3122a3d49482073a839f47d0ae4281",
            "locality": "Hazratganj",
            "areaName": "Hazratganj",
            "costForTwo": "₹350 for two",
            "cuisines": ["Pizzas", "Italian-American", "American", "Barbecue", "Snacks", "Grill", "Italian", "Pastas", "Sweets", "Desserts"],
            "avgRating": 4.4,
            "sla": {
                "deliveryTime": 35
            }
        }
    },
    {
        "info": {
            "id": "792326",
            "name": "Wendy's Flavor Fresh Burgers",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/26c3e02b-44f2-43c6-a689-766525870a94_792326.jpg",
            "locality": "Habibulla Estate Road",
            "areaName": "Hazratganj",
            "costForTwo": "₹500 for two",
            "cuisines": ["Burgers", "American", "Fast Food", "Snacks", "Beverages"],
            "avgRating": 4.7,
            "sla": {
                "deliveryTime": 41
            }
        }
    },
    {
        "info": {
            "id": "89361",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/28/5adb6607-0ec9-4044-bb70-b54eec37b7d2_68ae0552-7a40-4032-a43a-facd1c2942ce.jpeg",
            "locality": "Hazratganj",
            "areaName": "Hazratganj",
            "costForTwo": "₹250 for two",
            "cuisines": ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
            "avgRating": 4.1,
            "sla": {
                "deliveryTime": 25
            }
        }
    }

];



const RestaurantCard = ({resData}) =>{
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


const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            {restaurantData.map((restaurant) => (
                    <RestaurantCard 
                        key={restaurant.info.id} 
                        resData={restaurant}
                    />
                ))}
            </div>
        </div>
    )
};

const AppLayout = () =>{
    return <div className="app">
        <Header/>
        <Body/>
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);