import React, { useState } from "react"
import { Header } from "../components/Header/Header"
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"
export const ToDOListPage = () => {

    const [todos, setToDos] = useState<ToDo[]>([]);
    

        const createNewToDo = (text: string) => {
            const newToDo:ToDo = {
                id: todos.length,
                text: text,
                isDone: false
            }
            setToDos([...todos, newToDo])
        }

        const updateTodo = (toDoItem: ToDo) =>{
            const newTodos = todos.map((todo) => {
                if(todo.id === toDoItem.id){
                    todo.isDone = !todo.isDone
                }

                return todo
            })
            setToDos(newTodos)
        }

        const deleteTodo = (toDoItem: ToDo) =>{
            const newTodos = todos.filter((todo) => todo.id !== toDoItem.id)
            setToDos(newTodos)
        }

    return(
        <>
            <Header/>
            <Form createNewToDo={createNewToDo}/>
            <ToDoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        </>
    )
}