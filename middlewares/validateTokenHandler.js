import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'

export const validateToken = asyncHandler(async (req, res, next) => {
  let token
  let authHeader = req.headers.Authorization || req.headers.authorization
  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401)
        throw new Error('User is not authenticated')
      }
      req.user = decoded.user
      next()
    })
  } else {
    res.status(401)
    throw new Error('No auth token provided')
  }
})

