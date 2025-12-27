import Fuse from "fuse.js";
import { useState } from "react";
import { Search } from "lucide-react";
import SearchResults from "./SearchResults";
import methods from "../api/methods.data.js";
const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState([]);
    const fuseOptions = {
        keys: ["name", "description"]
    };

    const fuse = new Fuse(methods, fuseOptions);

    const handleInput = e => {
        setSearchQuery(e.target.value);
        const searchResult = fuse.search(e.target.value);

        setResults([...searchResult]);
    };

    return (
        <div className="px-4 py-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInput}
                    placeholder="Search docs..."
                    className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 dark:focus:ring-red-600 focus:border-transparent"
                />
                {searchQuery && <SearchResults  setSearchQuery={setSearchQuery} results={results} />}
            </div>
        </div>
    );
};

export default SearchBar;
