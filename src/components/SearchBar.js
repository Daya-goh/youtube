import { useState } from "react";

function SearchBar({ handleTermSubmit }) {
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleTermSubmit(input);
  };
  return (
    <div className="mt-4  flex flex-row justify-center w-1/2">
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          onChange={handleChange}
          value={input}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </form>
    </div>
  );
}
export default SearchBar;
