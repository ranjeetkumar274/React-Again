import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name: "Dummy",
                location: "default",
                login: ""
            },
        };
    }



    async componentDidMount(){
        const data = await fetch("  https://api.github.com/users/ranjeetkumar274");
        const json = await data.json();
        this.setState({
            userInfo:json,
        })

        console.log(json);  // Logging the JSON response
    }

    

    render(){

        const {name, location, login, avatar_url} = this.state.userInfo;


        return(
            <div className="user-card">
                <img src={avatar_url} className="avatar" />
                <div className="user-details">
                <h2 >Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : @{login}</h4>
                </div>
            </div>
        );
    }
}

export default UserClass; // Exporting the UserClass component as default