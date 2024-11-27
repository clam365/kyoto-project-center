import { Search } from 'lucide-react';

const SearchBar = ({ searchProject, onSearchChange }) => {
    return (
        <div className="flex items-center bg-[#f1f1f1] rounded-full px-4 py-3 w-full  hover:bg-gray-200 transition">
            <Search className="text-gray-500 w-5 h-5" />
            <input
                type="text"
                value={searchProject}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search student projects by title or year"
                className="bg-transparent ml-2 w-full outline-none text-gray-700"
            />
        </div>
    );
};

export default SearchBar;
