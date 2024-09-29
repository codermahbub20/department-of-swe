import { Outlet } from "react-router-dom";


const MainLayOut = () => {
    return (
        <div>
            <Outlet/>

            This Is MainLayout
        </div>
    );
};

export default MainLayOut;