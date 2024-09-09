const express = require('express')
const userdata = require('../models/Users')
const route = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

route.post('/signup', async (req, res) => {
    const { email, password } = req.body
    try {
        const User = await userdata.findOne({email})
        if (User) {
            return res.status(400).json({ msg: "User already exist" });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        console.log(hashedPassword)
        const newUser = await userdata.create({
            email: email,
            password: hashedPassword
        })

        return res.status(200).json({ msg: "Signed Up" })

    } catch (error) {
        res.status(400).json({ msg: "error" })
    }

})
route.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const User = await userdata.findOne({ email })
        if (!User) {
            res.status(400).json({ msg: 'user not found' })
        }
        const isPassword = await bcrypt.compare(password, User.password)

        if (!isPassword) {
            res.status(400).json({ msg: "Password Incorrect" })
        }
        const token = jwt.sign({ _id: User._id }, "nireesh", {
            expiresIn: '1h'
        })
        res.cookie('token', token)
        res.status(200).json({
            msg: 'Logged in Successfully'
        })

    } catch (error) {
        res.status(400).json({ msg: "Something went wrong" })
    }
})

module.exports = route