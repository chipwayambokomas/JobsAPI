const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const jwt = require('jsonwebtoken')

const register = async (req,res) => {
    // const {name,email,password} = req.body

    // Create a random byte, the integer states how many random bytes which means its more secure but the larger the number the more processing power is required 

    // const salt = await bcrypt.genSalt(10);

    // Get what you want hashed with the salt required

    // const hashedPassword = await bcrypt.hash(password, salt)

    // const tempUser = {name,email,password:hashedPassword}

    const user = await User.create({...req.body})

    const token =jwt.sign({userId:user._id, name:user.name}, 'jwtSecret', {expiresIn: '30d'})

    res.status(StatusCodes.CREATED).json({user:{name:user.name}, token})
}


const login = async (req,res) => {
    res.send('login user ')
}

module.exports = {
    register,
    login
}