import { useNavigate } from "react-router";
import { useSidebar } from "../context/SidebarContext";
const SearchResults = ({ results, setSearchQuery }) => {
    const { closeSidebar } = useSidebar();
    const navigate = useNavigate();
    const handleClick = path => {
        navigate(`/docs/api/${path}`);
        setSearchQuery("");
        closeSidebar();
    };

    if (results.length === 0) {
        return (
            <div className="absolute mt-2 w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 text-sm text-gray-500">
                No results found
            </div>
        );
    }

    return (
        <div
            className="
            absolute mt-2 w-full 
            max-h-72 overflow-y-auto
            rounded-lg border border-gray-200 dark:border-gray-800
            bg-white dark:bg-gray-900
            shadow-sm
        "
        >
            {results.map(({ item }, index) => (
                <div
                    onClick={() => handleClick(item.name)}
                    key={item.name}
                    className="
                        px-4 py-3 cursor-pointer
                        hover:bg-gray-100 dark:hover:bg-gray-800
                        border-b last:border-b-0
                        border-gray-100 dark:border-gray-800
                    "
                >
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {item.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;
