const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')

const register = async (req,res) => {
    // const {name,email,password} = req.body

    // Create a random byte, the integer states how many random bytes which means its more secure but the larger the number the more processing power is required 

    // const salt = await bcrypt.genSalt(10);

    // Get what you want hashed with the salt required

    // const hashedPassword = await bcrypt.hash(password, salt)

    // const tempUser = {name,email,password:hashedPassword}s
    const user = await User.create({...req.body})

    const token = user.createJWT()

    res.status(StatusCodes.CREATED).json({user:{name:user.name}, token})
}


const login = async (req,res) => {
    const {email, password} = req.body

    if (!email || !password) {
        throw new BadRequestError('Please provide email and password')
      }

    const user = await User.findOne({email})

    if(!user){
        throw new UnauthenticatedError('Invalid Credentials')
    }

    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
      throw new UnauthenticatedError('Invalid Credentials')
    }

    const token = user.createJWT()
    res.status(StatusCodes.OK).json({user: {name: user.name}, token })
}

module.exports = {
    register,
    login
}