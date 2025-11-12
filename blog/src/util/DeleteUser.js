"use client";

export default function DeleteUser(props) {
  const userId = props.id;
  console.log(userId);

  const deleteusers = async () => {
    let result = await fetch("http://localhost:3000/api/users/" + userId, {
      method: "DELETE",
    });
    result = await result.json();
    if (result.success) {
      alert("User Delete");
    } else {
      alert("User Not Deleted");
    }
  };

  return (
    <div>
      <button onClick={deleteusers}>Delete</button>
    </div>
  );
}
