import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  let menu = useLoaderData();
  // console.log(menu);
  return (
    <div className="divide-y divide-zinc-400">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </div>
  );
}

export async function loader() {
  let menu = await getMenu();
  return menu;
}

export default Menu;
