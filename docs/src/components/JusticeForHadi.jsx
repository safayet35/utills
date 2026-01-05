import { HandFist } from "lucide-react";
import hadi from "/assets/hadi.jpg";
const JusticeForHadi = () => {
    return (
        <div className="w-full py-2 flex items-center justify-center bg-red-500 text-white gap-2">
            <p className="font-bold">We want justice for Osman hadi</p>
            <HandFist />
            <img className="w-14 rounded-full" src={hadi} alt="" />
        </div>
    );
};

export default JusticeForHadi;
