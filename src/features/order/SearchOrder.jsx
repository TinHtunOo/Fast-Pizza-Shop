import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function onHandleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={onHandleSubmit}>
      <input
        placeholder="Search Id"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-68 rounded-full bg-zinc-200 px-4 py-2 text-sm text-stone-800 transition-all duration-300 placeholder:text-zinc-500 focus:outline-none focus:ring focus:ring-red-100 sm:w-72 sm:focus:w-80"
      />
    </form>
  );
}

export default SearchOrder;
