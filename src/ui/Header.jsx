import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "./UserName";
function Header() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 bg-red-800 p-4 font-semibold text-zinc-100">
      <Link to="/" className="uppercase tracking-[4px]">
        Fast Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
