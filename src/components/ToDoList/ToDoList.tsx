import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss';
import { ToDo } from "../../models/todo-item";

export const ToDoList = (props: {todos: ToDo[], deleteTodo: Function, updateTodo: Function}) => {


    const chekedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item, idx) => {
                return (<ToDoListItem toDoItem={item} key={idx} 
                    deleteTodo={props.deleteTodo} updateTodo={props.updateTodo}/>)
            })
    }

    const unChekedList = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item, idx) => {
                return (<ToDoListItem toDoItem={item} key={idx}
                     deleteTodo={props.deleteTodo} updateTodo={props.updateTodo}/>)
            })
    }
    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                { chekedList()}
            </ul>
            <ul className="todo-list completed">
                {unChekedList()}
            </ul>
        </div>
    )
}