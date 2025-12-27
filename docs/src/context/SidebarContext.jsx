import { createContext, useContext, useState } from "react";

const SidebarContext = createContext(null);

export const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);
    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

    return (
        <SidebarContext.Provider
            value={{ isSidebarOpen, openSidebar, closeSidebar, toggleSidebar }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    const ctx = useContext(SidebarContext);
    if (!ctx) throw new Error("useSidebar must be used inside SidebarProvider");
    return ctx;
};
