import React, { useEffect, useState } from 'react'
import { Route, NavLink } from "react-router-dom"
// import Transfer from './components/transfer.js' 

// import Transfer from './components/transfer.js' 



const UserList = () => {

    // const history = useHistory()
    const [userData, setUserData] = useState([])

    const callAboutPage = async () => {
        try {
            const res = await fetch('http://localhost:5000/userlist', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                // credentials:"include"
            })
            const data = await res.json()
            // console.log(data)
            setUserData(data)
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;

            }
        } catch (error) {
            console.log(error)
            // history.push('/login')
        }
    }

    useEffect(() => {
        callAboutPage()

    }, [])




    return (
        <>
            <form>
                <div class="table-container">
                    <center>
                        <h1 class="head">User List</h1></center>
                    <div class="table-heading">
                        <table class="table">
                            <thead>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Current Balance</th>
                                <th>Transfer</th>
                            </thead>

                            <tbody>
                                {userData.map((user, key) => (
                                    <tr key={key}>
                                        <td data-label="Name">{user.name}</td>
                                        <td data-label="Email">{user.email}</td>
                                        <td data-label="Current Balance">{user.current_bal}</td>
                                        <td data-label="Transfer"><NavLink class="btn" to={"/transfer/" + user.name} >Transact</NavLink></td>
                                    </tr>
                                ))}

                            </tbody>

                        </table>
                    </div>
                </div>
            </form>
        </>
    )
}

export default UserList;