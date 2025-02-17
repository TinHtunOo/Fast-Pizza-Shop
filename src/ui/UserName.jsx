import { useSelector } from "react-redux";

function UserName() {
  const username = useSelector((state) => state.user.username);
  if (!username) return;
  return (
    <div className="font-sm hidden tracking-wide md:block">{username}</div>
  );
}

export default UserName;
