import mongoose from 'mongoose'

const todoModel = mongoose.Schema(
  {
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

