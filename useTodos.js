import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || [])
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action)
    }
    
    const handleDeleteTodo = (todo_id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: todo_id
        }
        dispatch(action)
    }
    
    const handleToggleTodo = (todo_id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: todo_id
        }
        dispatch(action)
    }

    return {
        todos,
        pendientes: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
