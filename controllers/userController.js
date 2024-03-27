import asyncHandler from 'express-async-handler'
//desc register user
//@route POST /api/user/register
//@access Public
export const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: 'register user here' })
})
//desc login user
//@route POST /api/user/login
//@access Public
export const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'login user here' })
})
//desc get current user data
//@route GET /api/user/register
//@access Public
export const getUser = asyncHandler(async (req, res) => {
  res.json({ message: 'get user details here' })
})

