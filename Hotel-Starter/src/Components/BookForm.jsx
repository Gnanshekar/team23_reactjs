import React, { useContext } from "react";
import AdultsDropDown from "../Components/AdultsDropdown";
import KidsDropDown from "../Components/KidsDropDown";
import CheckIn from "../Components/CheckIn";
import CheckOut from "../Components/CheckOut";
import { RoomContext } from "../Context/RoomContext";

const BookForm = () => {
    const { handleClick } = useContext(RoomContext)
    return (
        <form className="h-[300px] w-full lg:h-[70px]">
            <div className="flex flex-col w-full h-full lg:flex-row">
                <div className="flex-1 border-r">
                    <CheckIn />
                </div>
                <div className="flex-1 border-r">
                    <CheckOut />
                </div>
                <div className="flex-1 border-r">
                    <AdultsDropDown />
                </div>
                <div className="flex-1 border-r">
                    <KidsDropDown />
                </div>
                {/* btn */}
                <button onClick={(e) => handleClick(e)} type="submit" className="btn btn-primary">
                    Check now
                </button>
            </div>

        </form>
    );
};

export default BookForm;