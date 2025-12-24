import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router";
const SidebarFooter = () => {
    return (
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-4">
                <Link
                    to="https://github.com/safayet35/utills"
                    target="_blank"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                >
                    <Github className="w-5 h-5" />
                </Link>
                <Link
                    to="https://www.linkedin.com/in/safayet-rahman-370a78275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                >
                    <Linkedin className="w-5 h-5" />
                </Link>
            </div>
        </div>
    );
};

export default SidebarFooter;
