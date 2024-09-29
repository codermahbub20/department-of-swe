import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";


const MainLayOut = () => {
    return (
        <div className="font-Roboto">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayOut;