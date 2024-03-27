import mongoose from 'mongoose'

const todoModel = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    todo: {
      type: String,
      required: [true, 'todo is a required field']
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

export const Todo = mongoose.model('Todo', todoModel)

