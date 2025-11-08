import getUsers from "../../../../services/getUsers";

export default async function page(props) {
  const getUserList = getUsers();
  const users = await getUserList;
  const currentId = props.params.userId;
  const userData = users[currentId - 1];
  console.log(users[currentId - 1]);

  return (
    <div>
      <h3>User Deatils Page</h3>
      <h4>Id: {userData.id}</h4>
      <h4>Name: {userData.name}</h4>
      <h4>UserName: {userData.username}</h4>
      <h4>Email: {userData.email}</h4>
    </div>
  );
}

// SSG
export async function generateStaticParams() {
  const getUserList = getUsers();
  const users = await getUserList;
  return users.map((user) => {
    return { userId: user.id.toString() };
  });
}
