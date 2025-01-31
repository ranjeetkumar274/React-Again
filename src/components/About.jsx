import UserClass from "./UserClass";

const About = () => {
    return (<div className="about">
        <h1>About</h1>
        <p>This is the about page.</p>
        <UserClass name={"Ashu Yadav"}/>
    </div>
    );
};

export default About; // Exporting the About component as default