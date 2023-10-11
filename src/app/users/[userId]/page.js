import getUser from "../../../../services/getUser";

export default async function Page(props) {
  const getUserList = getUser();
  const users = await getUserList;
  const currentId = props.params.userId;
  console.log(users[currentId - 1]);
  const userDetail = users[currentId - 1];

  return (
    <div>
      <h3>User Detail Page</h3>
      <h4>ID : {userDetail.id}</h4>
      <h4>Name : {userDetail.name}</h4>
      <h4>Website : {userDetail.website}</h4>
    </div>
  );
}

export async function generateStaticParams() {
  const getUserList = getUser();
  const users = await getUserList;
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
