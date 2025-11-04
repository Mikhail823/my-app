import { useState } from 'react';
import './Form.scss';
import { ToastContainer, toast } from 'react-toastify';

export const Form = (props: {createNewToDo: Function}) => {
    const [text, setText] = useState('')

    const formSubmit = () => {
        if(text){
            props.createNewToDo(text)
            setText('')
        }
    }

    const addTodoNotify = () => {toast.success('Дело добавлено!', {
        position:'bottom-right'
    })}

    return(
        <div className="form-wrapper">
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input value={text} type="text" onChange={(e) => setText(e.target.value)} />
                    <button onClick={addTodoNotify}></button>
                    
                </label>
                
            </form>
            <ToastContainer />
        </div>
    )
}