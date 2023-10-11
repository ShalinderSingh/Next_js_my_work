import Link from "next/link";
import "./../style.css"
import DeleleUser  from "./../util/DeleteUser"
async function getUser() {
  let userData = await fetch("http://localhost:3000/backend");
  const data = await userData.json();
  return data;
}
export default async function Page() {
  const users = await getUser();
  console.log(users);
  return (
    <div>
      <h1>User List</h1>
      {users.map((item) => (
        <div className="user-item" key={item.id}>
          <span><Link href={`userApi/${item.id}`}>{item.name}</Link></span>
          <span>
            <Link href={`userApi/${item.id}/update`}> Edit </Link>
          </span>
          <span><DeleleUser id={item.id}/></span>
        </div>
      ))}
    </div>
  );
}
