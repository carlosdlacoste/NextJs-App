// "use client";
import Link from "next/link";

function Users ({users}){
    return (
        <>
            <ul className="flex flex-col justify-center">
            {
                users.map(user => (
                    <Link href={`/users/${user.id}`} key={user.id}>
                        
                        <li key={user.id} className="bg-slate-400 text-black mb-2 p-4 rounded-md w-full-x flex justify-between">
                        <div>
                            <h5 className="font-bold">{user.id} {user.first_name} {user.last_name}</h5>
                            <p className="text-slate-100">email: {user.email}</p>
                        </div>
                        <img src={user.avatar} className="rounded-full w-20" alt="avatar"/>
                        </li>
                    </Link>
                ))
            }
            </ul>
        </>
    );
}

export default Users;