import { Link } from "react-router";
import { useState, useEffect } from "react";
import ActionButtons from "../components/not-found/ActionButtons";
import FunCode from "../components/not-found/FunCode";
import { Home, Zap, FileQuestion, Github, Book } from "lucide-react";

const NotFoundPage = () => {
    const [glitchActive, setGlitchActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 200);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const popularPages = [
        {
            name: "Documentation",
            icon: <Book className="w-5 h-5" />,
            href: "/docs/installation"
        },
        {
            name: "GitHub Repository",
            icon: <Github className="w-5 h-5" />,
            href: "https://github.com/safayet35/utills"
        },
        {
            name: "Quick Start",
            icon: <Zap className="w-5 h-5" />,
            href: "/#quick-start"
        }
    ];

    return (
        <div className={`min-h-screen transition-colors duration-300`}>
            <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col py-10">
                {/* Main Content */}
                <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
                    <div className="max-w-4xl w-full text-center">
                        {/* Animated Icon */}
                        <div className="mb-8 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-rose-500/20 dark:bg-rose-500/10 rounded-full blur-3xl animate-pulse"></div>
                                <div className="relative w-32 h-32 bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-900/10 rounded-3xl flex items-center justify-center border border-rose-200 dark:border-rose-800 shadow-lg transform hover:rotate-12 transition-transform duration-500">
                                    <FileQuestion
                                        className="w-16 h-16 text-rose-600 dark:text-rose-400"
                                        strokeWidth={1.5}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 404 Text */}
                        <div className="mb-6">
                            <h1
                                className={`text-8xl sm:text-9xl font-bold mb-4 bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 bg-clip-text text-transparent ${
                                    glitchActive ? "animate-pulse" : ""
                                }`}
                            >
                                404
                            </h1>
                            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto mb-8"></div>
                        </div>

                        {/* Error Message */}
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                            Page not found
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Looks like this utility function doesn't exist yet.
                            The page you're looking for might have been moved,
                            deleted, or perhaps never existed.
                        </p>

                        {/* Action Buttons */}
                        <ActionButtons />

                        {/* Popular Pages */}
                        <div className="max-w-2xl mx-auto">
                            <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider font-semibold mb-6">
                                Popular Pages
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {popularPages.map((page, index) => (
                                    <Link
                                        key={index}
                                        to={page.href}
                                        className="group p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-rose-500 dark:hover:border-rose-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                    >
                                        <div className="flex flex-col items-center space-y-3">
                                            <div className="w-12 h-12 bg-rose-50 dark:bg-rose-900/20 rounded-xl flex items-center justify-center text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform">
                                                {page.icon}
                                            </div>
                                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                {page.name}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Fun Error Code */}
                        <FunCode />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default NotFoundPage;
