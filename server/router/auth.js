const express = require('express')
const router = express.Router();


require('../db/conn')


//post data in userschema
const Customer = require('../model/userSchema')


router.get('/userlist', async (req, res) => {
    try {
        const table = await Customer.find()
        res.json(table)
    } catch (error) {
        console.log(error)
    }
})


// const Customer =require('../model/userSchema')
router.post('/userlist', async (req, res) => {
    const { name, email, current_bal } = req.body;
    if (!name || !email || !current_bal) {
        return (res.status(422).json({ error: "Plz filled all the required fields" }))
    }
    try {
        const table = new Customer({ name, email, current_bal })
        //yahan pe hum hashing kar rahe hain schema mn or osmn next laga wa ha jiske waja se age save hoga data
        const tableRegister = await table.save()
        if (tableRegister) {
            res.status(201).json({ message: "Customer registered succesfully" })
        } else {
            res.status(500).json({ error: "Failed to register" })
        }
    } catch (error) {
        console.log(error)
    }
})


const Transfer = require('../model/transferSchema')

router.post('/transfer', async (req, res) => {

    const { sendername, recivername, amount } = req.body;
    if (!sendername || !recivername || !amount) {
        return (res.status(422).json({ error: "Plz filled all the required fields" }))
    }
    try {
        const fromCustomer = await Customer.find({ name: `${sendername}` })
        const senderId = fromCustomer[0]._id
        if (fromCustomer[0].current_bal >= amount && amount>0) {
            const newFromBalance = Number(fromCustomer[0].current_bal) - Number(amount)
            const updateSenderBalance = await Customer.findByIdAndUpdate(senderId, { current_bal: newFromBalance })

            const toCustomer = await Customer.find({ name: `${recivername}` })
            const reciverId = toCustomer[0]._id
            const newToBalance = Number(toCustomer[0].current_bal) + Number(amount)
            const updateReciverBalance = await Customer.findByIdAndUpdate(reciverId, { current_bal: newToBalance })
            const table = new Transfer({ sendername, recivername, amount })
            //yahan pe hum hashing kar rahe hain schema mn or osmn next laga wa ha jiske waja se age save hoga data
            const tableRegister = await table.save()
            if (tableRegister) {
                res.status(201).json({ message: "Funds Transfered succesfully" })
            } else {
                res.status(500).json({ error: "Failed to Transfer" })

            }
        }
        else {
            res.status(500).json({ error: "Not Available Funds" })
        }


        // console.log(updateSenderBalance)
        // console.log(updateReciverBalance)
        // console.log(newFromBalance)

    } catch (error) {
        console.log(error)
    }
})




router.get('/transfer', async (req, res) => {
    try {
        const table = await Transfer.find()
        res.json(table)
    } catch (error) {
        console.log(error)
    }
})






//update data in timetable
router.put('/userlist/:id', async (req, res) => {
    const id = req.params.id;
    const { name, email, current_bal } = req.body;
    try {
        const table = await Customer.findByIdAndUpdate(id, { name, email, current_bal })
        res.json(table)

    } catch (error) {
        console.log(error)
    }
})


module.exports = router;