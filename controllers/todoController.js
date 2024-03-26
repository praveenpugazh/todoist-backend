import asyncHandler from 'express-async-handler'
import { Todo } from '../models/todoModel.js'
//desc Get all todos
//@route GET /api/todos
//@access Public
export const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find()
  res.status(200).json(todos)
})

//desc create todo
//@route POST /api/todo
//@access Public
export const createTodo = asyncHandler(async (req, res, next) => {
  const { todo } = req.body
  if (!todo) {
    throw new Error('todo is required')
  }
  const todoData = await Todo.create({ todo })
  res.status(201).json(todoData)
})

//desc get one todo
//@route GET /api/todo
//@access Public
export const getTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id)
  if (!todo) {
    res.status(404)
    throw new Error('Todo not found')
  }
  res.status(200).json(todo)
})

//desc update one todo
//@route PUT /api/todo/:id
//@access Public
export const updateTodo = asyncHandler(async (req, res) => {
  const todoDb = await Todo.findById(req.params.id)
  if (!todoDb) {
    res.status(404)
    throw new Error('Todo not found')
  }
  const { todo, completed } = req.body
  if (todo == null && completed == null) {
    res.status(404)
    throw new Error('Todo is required in body')
  }
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.status(200).json(updatedTodo)
})

//desc delete one todo
//@route GET /api/todo:id
//@access Public
export const deleteTodo = asyncHandler(async (req, res) => {
  console.log('delete todo')

  const todoDb = await Todo.findById(req.params.id)
  if (!todoDb) {
    res.status(404)
    throw new Error('Todo not found')
  }
  console.log(todoDb)
  await Todo.deleteOne({ _id: req.params.id })
  res.status(200).json({ message: 'deleted' })
})

