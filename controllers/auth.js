const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const bcrypt = require('bcryptjs')

const register = async (req,res) => {
    const {name,email,password} = req.body

    // Create a random byte, the integer states how many random bytes which means its more secure but the larger the number the more processing power is required 

    const salt = await bcrypt.genSalt(10);

    // Get what you want hashed with the salt required
    
    const hashedPassword = await bcrypt.hash(password, salt)

    const tempUser = {name,email,password:hashedPassword}

    const user = await User.create({...tempUser})
    res.status(StatusCodes.CREATED).json({user})
}


const login = async (req,res) => {
    res.send('login user ')
}

module.exports = {
    register,
    login
}