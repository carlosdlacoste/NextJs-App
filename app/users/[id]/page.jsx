async function getUser(id) {
    const resp = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await resp.json()
    return data.data
}


export default async function UserPage ({params}) {
    const user = await getUser(params.id)
    return(
        <>
            <div className="bg-red-300 p-10 rounded-md">
                <img src={user.avatar} alt='user avatar' className="m-auto my-4"/>
                <h3 className="text-3xl font-bold">{user.id} {user.first_name} {user.last_name}</h3>
                <p>email: {user.email}</p>
            </div>
        </>
    );
}