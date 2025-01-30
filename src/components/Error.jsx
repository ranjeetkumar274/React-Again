import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>ooops....</h1>
            <h2>404 Error: Page Not Found</h2>
        </div>
    );
};

export default Error; // Exporting the Error component as default