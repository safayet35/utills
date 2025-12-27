import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import { useState } from "react";
const AppLayout = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
            {/* Sidebar (fixed) */}
            <Sidebar
                
            />

            {/* Main content */}
            <div className="lg:pl-72">
                <Header />
                <main className="p-4 md:px-8 md:py-2 prose max-w-none">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AppLayout;
