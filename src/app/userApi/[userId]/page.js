import Link from "next/link";

async function getUser(id) {
    console.log(id)
  let userData = await fetch(`http://localhost:3000/backend/${id}`);
  const data = await userData.json();
  return data.result;
}
export default async function Page(params) {

  const user = await getUser(params.params.userId);
  console.log(user,'usgsgs')
  return (<div>
    <h1>User Detail</h1>
    <h1>{user.id}</h1>
    <h2>{user.name}</h2>
    <h3>{user.age}</h3>
    <h4>{user.email}</h4>
  
  </div>);
}
