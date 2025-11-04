import { ToDo } from '../../../models/todo-item';
import './ToDoListItem.scss';

import { ToastContainer, toast } from 'react-toastify';

export const ToDoListItem = (props: {toDoItem: ToDo, deleteTodo: Function, updateTodo: Function}) => {

  const updateNotify = () => {toast.success('Дело обновлено!', {
    position: 'bottom-right'
  })}

  const deleteNotify = () => {toast.success('Дело удалено', {
      position: 'bottom-left'
    })

  }

  const deleteTodo = () => {props.deleteTodo(props.toDoItem)}

  const onClickDelete = () => {
    toast.success('Дело удалено!', {
      position: 'bottom-right'
    })
   props.deleteTodo(props.toDoItem)
    
  }
  const onClickUpdate = () => {
    props.updateTodo(props.updateTodo)
    toast.success('Дело обновлено', {
      position: 'bottom-right'
    })
  }
  
  

    return (
        <li className="todo-list-item__wrapper">
            <span>{props.toDoItem.text}</span>
            <div className="todo-list-item__buttons">
                <button 
                className="btn-trash"
                onClick={() => onClickDelete()}>
                </button>
                <button 
                className={props.toDoItem.isDone ? 'btn-check' : 'btn-uncheck'}
                onClick={() => onClickUpdate()} >

                </button>
                <ToastContainer />
            </div>
        </li>
    )
}