import Link from "next/link";
import getUser from "../../../services/getUser";
export default async function Page() {
  const getUserList = getUser();
  const users = await getUserList;
  return (
    <div>
      <h1>User List</h1>
      {users.map((item) => {
        return (
          <div key={item.id}>
            <Link href={`/users/${item.id}`}>{item.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
