import { revalidatePath } from 'next/cache';
import React from 'react'

const UsersPage = async () => {
    interface User{
        id:string;
        name:string;
    }

    const apiRes=await fetch('https://jsonplaceholder.typicode.com/users',{next:{revalidate:10}})
    const users:User[]=await apiRes.json(); 
  return (
    <>
    <h1>Users</h1>
    <ul>
        {users.map(user=><li key={user.id}>{user.name}</li>)}
    </ul>
    </>
  )
}

export default UsersPage