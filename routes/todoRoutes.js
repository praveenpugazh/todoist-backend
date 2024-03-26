import express from 'express'
import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo
} from '../controllers/todoController.js'

const router = express.Router()

router.get('/todos', getTodos).post('/todos', createTodo)

router
  .get('/todo/:id', getTodo)
  .put('/todo/:id', updateTodo)
  .delete('/todo/:id', deleteTodo)

export default router

