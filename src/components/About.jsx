import UserClass from "./UserClass";

const About = () => {
    return (<div className="bg-red-300">

        <div className="flex flex-col items-center justify-center p-8">
        <h1 className="font-extrabold text-5xl">Meet our team</h1>
        <p className="text-slate-600 px-[400px] text-center py-6">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
        </div>

        <div className="px-8 py-4 flex flex-wrap items-center justify-center">
        <UserClass name={"Ashu Yadav"}/>
        </div> 
    </div>
    );
};

export default About; // Exporting the About component as default