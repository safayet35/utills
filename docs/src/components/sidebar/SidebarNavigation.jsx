import navigation from "../../api/navigation.js";
import { NavLink } from "react-router-dom";
const SidebarNavigation = () => {
    const baseClass =
        "flex items-center px-3 py-2 text-sm rounded-lg transition-colors";

    const activeClass =
        "bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400 font-medium";

    const inactiveClass =
        "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-gray-100";

    return (
        <nav className="flex-1 px-4 pb-6 overflow-y-auto">
            {navigation.map((section, idx) => (
                <div key={idx} className="mb-6">
                    <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        {section.title}
                    </h3>
                    <ul className="space-y-1">
                        {section.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                                <NavLink
                                    to={`/docs/${item.slug}`}
                                    className={({ isActive }) =>
                                        `${baseClass} ${
                                            isActive
                                                ? activeClass
                                                : inactiveClass
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </nav>
    );
};

export default SidebarNavigation;
