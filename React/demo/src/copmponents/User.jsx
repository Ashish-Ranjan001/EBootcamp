
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const User = () => {
  
    const [userData,setPostData]=useState([]);
    useEffect(()=>{
      const URL="https://jsonplaceholder.typicode.com/users";
      axios.get(URL)
      .then(res=> {
        console.log(res.data)
        setPostData(res.data)
    })
      .catch(err=> console.log(err))
    },[])
    return (
        <div>
        <h2>User Information</h2>
        <table className='table'>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {userData.map((user, index) => (
                    <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                    </tr>
                ))}
                <br />
            </tbody>
        </table>
    </div>
  )
}

export default User
