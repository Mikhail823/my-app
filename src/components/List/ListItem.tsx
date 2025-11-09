import { ToDo } from "../../models/todo-item"
import classes from './ListItem.module.scss'



export const ListItem = ({todo}: {todo : ToDo}) => {

    const getClassLink = ({isDone} : {isDone : boolean}) : string =>{
        return isDone ? 'classes.done' : 'classes.noDone';
    }
    return (
       
            <a 
                className={`${classes.link} ${todo.isDone ? classes.done : classes.noDone}`} 
                href={`/list/${todo.id}`}>
                    {todo.text}
        </a>
           
       
    )
}