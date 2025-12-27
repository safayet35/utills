import SidebarHeader from "./SidebarHeader";
import SearchBar from "../SearchBar";
import SidebarNavigation from "./SidebarNavigation";
import SidebarFooter from "./SidebarFooter";
import { useSidebar } from "../../context/SidebarContext";
import {
    Menu,
    ChevronRight,
    Sun,
    Moon,
    FileText,
    Code,
    Zap,
    Package,
    Github,
    Twitter
} from "lucide-react";

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useSidebar();

    return (
        <aside
            className={`fixed inset-y-0 left-0 z-30 w-72 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 ${
                isSidebarOpen
                    ? "translate-x-0"
                    : "-translate-x-full lg:translate-x-0"
            }`}
        >
            <div className="flex flex-col h-full">
                {/* Header */}

                <SidebarHeader />
                {/* Search */}
                <SearchBar />

                {/* Navigation */}
                <SidebarNavigation closeSidebar={closeSidebar} />

                {/* Footer Links */}
                <SidebarFooter />
            </div>
        </aside>
    );
};

export default Sidebar;
