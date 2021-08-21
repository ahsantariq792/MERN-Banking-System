import React, { useEffect, useState } from 'react'


const TransferList = () => {

    // const history = useHistory()
    const [userData, setUserData] = useState([])

    const callAboutPage = async () => {
        try {
            const res = await fetch('http://localhost:5000/transfer', {
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
                        <h1 class="head">Transaction</h1></center>
                    <div class="table-heading">
                        <table class="table">
                            <thead>
                                <th>Sender Name</th>
                                <th>Reciver Name</th>
                                <th>Amount</th>
                            </thead>

                            <tbody>
                                {userData.map((user, key) => (
                                    <tr key={key}>
                                        <td data-label="Sender Name">{user.sendername}</td>
                                        <td data-label="Reciver Name">{user.recivername}</td>
                                        <td data-label="Amount">{user.amount}</td>
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

export default TransferList;