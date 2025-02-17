import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateUsername } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateUsername(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mt-8 h-12 w-72 rounded-full bg-zinc-200 px-4 py-2 text-sm text-stone-800 transition-all duration-300 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-800 sm:w-72"
      />

      {username !== "" && (
        <div className="mt-5">
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
