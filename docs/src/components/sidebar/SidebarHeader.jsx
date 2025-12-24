import logo from "/assets/utills-logo.jpg";
import {
    
    X,
    
} from "lucide-react";
const SidebarHeader = () => {
    return (
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-red-600 rounded-md flex items-center justify-center">
                    <img src={logo} className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-semibold">Documentation</span>
            </div>
            <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
                <X className="w-5 h-5" />
            </button>
        </div>
    );
};

export default SidebarHeader;
