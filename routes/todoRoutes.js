import express from 'express'
import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo
} from '../controllers/todoController.js'
import { validateToken } from '../middlewares/validateTokenHandler.js'

const router = express.Router()

router
  .get('/todos', validateToken, getTodos)
  .post('/todos', validateToken, createTodo)

router
  .get('/todo/:id', validateToken, getTodo)
  .put('/todo/:id', validateToken, updateTodo)
  .delete('/todo/:id', validateToken, deleteTodo)

export default router

