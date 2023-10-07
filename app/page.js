const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  // console.log(data);
  return data.data;
}


const HomePage = async () => {
  const users = await fetchUsers()
  return(
    <>
      <ul>
        {
          users.map(user => (
            <li key={user.id} className="bg-gray-400 mb-2 p-4 rounded-md">
              <div>
                <h5>{user.id} {user.first_name} {user.last_name}</h5>
                <p>email: {user.email}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default HomePage;