import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name: "Author",
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
            <div className="w-[290px] h-[400px] rounded-lg p-4 m-4 flex flex-col items-center bg-red-200">
                <img src={avatar_url} className="w-100 h-[220px] rounded-[50%] pb-6" />
                <div className="user-details">
                <h2 className="text-center pb-2 text-xl font-bold">{name}</h2>
                <h3 className="text-center pb-2 text-slate-700">Contributor</h3>
                <h4 className="text-slate-800">Linkedin : @{login}</h4>
                </div>
            </div>
        );
    }
}

export default UserClass; // Exporting the UserClass component as default