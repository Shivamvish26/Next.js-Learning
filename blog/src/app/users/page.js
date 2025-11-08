import Link from "next/link";
import getUsers from "../../../services/getUsers";

export default async function GetUser() {
  const users = await getUsers();

  return (
    <div>
      <h1>Static Users Page</h1>
      <p>This is the static users page.</p>

      {users.map((user) => (
        <h2 key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </h2>
      ))}
    </div>
  );
}
