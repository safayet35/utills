import logo from "/assets/utills-logo.jpg";

const SidebarHeader = () => {
    return (
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-red-600 rounded-md flex items-center justify-center">
                    <img src={logo} className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-semibold">Documentation</span>
            </div>

        </div>
    );
};

export default SidebarHeader;
