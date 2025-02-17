import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-12 text-center sm:my-14">
      <h1 className="mb-8 px-4 text-xl font-semibold sm:text-2xl md:text-3xl">
        The best pizza.
        <br />
        <span className="text-red-800">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username ? (
        <Button to="/menu" type="primary">
          Continue Ordering
        </Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
