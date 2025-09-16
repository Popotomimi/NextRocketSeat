type UserListProps = {
  id: number;
  name: string;
};

async function fetchUsers(): Promise<UserListProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
      ]);
    }, 6000);
  });
}

async function UserList() {
  const userList = await fetchUsers();
  return (
    <div className="mt-20 text-white">
      {userList.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

const UserListPage = () => {
  return (
    <div>
      <h2>UserListPage</h2>
      <UserList />
    </div>
  );
};

export default UserListPage;
