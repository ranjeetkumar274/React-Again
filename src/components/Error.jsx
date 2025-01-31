import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>ooops....</h1>
            <h2>404 Error: Page Not Found</h2>
            <h3>Error Status : {err.status}</h3>
        </div>
    );
};

export default Error; // Exporting the Error component as default