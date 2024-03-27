import mongoose from 'mongoose'

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Username is must']
    },
    email: {
      type: String,
      required: [true, 'Email id is must'],
      unique: [true, 'Email address already exists']
    },
    password: {
      type: String,
      required: [true, 'Password is must']
    }
  },
  {
    timestamps: true
  }
)

export const User = mongoose.model('User', userModel)

