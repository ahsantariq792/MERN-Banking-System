import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'


const Transfer = () => {
    const location = useLocation()
    const senderName = location.pathname.slice(10)
    const [customerList, setUserData] = useState([])

    const callAboutPage = async () => {
        try {
            const res = await fetch('http://localhost:5000/userlist', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                // credentials: "include"
            })
            const data = await res.json()
            // console.log(data)
            for (let i = 0; i < data.length; i++) {
                if (data[i].name == senderName) {
                    data.splice(i, 1);

                }
            }
            //   console.log(data)

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




    // const history=useHistory()
    const [table, setTable] = useState({
        sendername: senderName, recivername: "", amount: 0
    })

    let name, value
    const handleInputs = (e) => {
        // console.log(e)
        name = e.target.name;
        value = e.target.value;
        setTable({ ...table, [name]: value })
    }
    const PostData = async (e) => {
        e.preventDefault();
        const { sendername, recivername, amount } = table;
        //    console.log(table)
        const res = await fetch('http://localhost:5000/transfer', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                sendername, recivername, amount
            })
        })
        const datatransfer = await res.json()
        console.log(res)
        //    console.log(data)
        if (res.status === 201) {
            window.alert("Funds Transfered succeesfully")
        } else {
            window.alert("Not transfered Succesfully")
        }
    }


    useEffect(() => {
        callAboutPage()

    }, [])


    return (
        <>
           





            <div class="table-container">
                <center>
                    <h1 class="head">Transfer Amount</h1></center>
                <div class="table-heading">
                    <table class="table">
                        <thead>
                            <th>Sender</th>
                            <th>Reciever</th>
                            <th>Amount</th>
                        </thead>

                        <tbody>
                            <tr>

                                <td data-label="Sender">{senderName}</td>
                                <td class="select" data-label="Reciever"><select name="recivername" id="recivername" onChange={handleInputs} >
                                    {customerList.map((customer, key) => (

                                        <option>{customer.name}
                                        </option>
                                    ))}
                                </select></td>
                                <td data-label="Amount"><input name="amount" id="amount" type="number" onChange={handleInputs}></input></td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
                <center>
                        <input  type="submit" name="timetable" id="timetable" className="table-submit" value="Transfer" onClick={PostData}></input>
                        </center>
            </div>
        </>
    )
}
export default Transfer;