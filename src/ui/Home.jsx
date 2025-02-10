import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-12 text-center sm:my-14">
      <h1 className="mb-8 px-4 text-xl font-semibold sm:text-2xl md:text-3xl">
        The best pizza.
        <br />
        <span className="text-red-800">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
