import { useState } from "react";
import PropTypes from "prop-types";

const SearchField = ({ className, setSearchQuery }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Clear the previous timeout if the user types again within 2 seconds
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Set a new timeout to call the onSearch function after 2 seconds of inactivity
    const timeout = setTimeout(() => {
      setSearchQuery(term);
    }, 2000);

    setDebounceTimeout(timeout);
  };

  return (
    <div className={`${className}`}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search products..."
        className="bg-gray-50 py-1 px-2 lg:p-2 w-full border border-gray-300 rounded max-w-[200px] lg:max-w-[600px]"
      />
    </div>
  );
};

SearchField.propTypes = {
  className: PropTypes.string,
  setSearchQuery: PropTypes.func.isRequired,
};

export default SearchField;
