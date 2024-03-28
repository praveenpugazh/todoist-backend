import asyncHandler from 'express-async-handler'
import { User } from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
//desc register user
//@route POST /api/user/register
//@access Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  if (!name && !email && !password) {
    res.status(400)
    throw new Error('Name, email and password fields are mandatory')
  }
  const userAvailable = await User.findOne({ email })
  if (userAvailable) {
    res.status(400)
    throw new Error('User already exists')
  }
  const salt = await bcrypt.genSaltSync(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  console.log(hashedPassword)
  const user = await User.create({ name, email, password: hashedPassword })
  res.json({ name: user.name, email: user.email })
})
//desc login user
//@route POST /api/user/login
//@access Public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  if (!email && !password) {
    res.status(400)
    throw new Error('Email and password fields are mandatory')
  }
  const user = await User.findOne({ email })
  if (!user) {
    res.status(404)
    throw new Error('No user found')
  }
  const checkPassword = await bcrypt.compare(password, user.password)
  if (!checkPassword) {
    res.status(400)
    throw new Error('Password is wrong')
  }
  const accessToken = jwt.sign(
    {
      user: {
        name: user.name,
        email: user.email,
        id: user._id
      }
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '24h' }
  )
  if (!accessToken) {
    res.status(401)
    throw new Error('Error with access token')
  }
  res.json({ name: user.name, email, accessToken })
})
//desc get current user data
//@route GET /api/user/register
//@access Public
export const getUser = asyncHandler(async (req, res) => {
  res.json(req.user)
})

