async function userlist() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}

export default async function Loaderpage() {
  const users = await userlist();
  console.log(users);
  return (
    <div>
      <h1>Loader Page </h1>
      <h5>Checking the assets file if it is working or not</h5>
      {users.map((item) => (
        <div key={item.id}>
          <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    {item.firstName} {item.lastName}
                  </td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}


