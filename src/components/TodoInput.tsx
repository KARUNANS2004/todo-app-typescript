import { KeyboardEvent, useState } from "react";

export function TodoInput(props:{handleAddTodo(newTodo:string):void}){
    const {handleAddTodo}=props
    const [inputValue, setInputValue]=useState('');

    const handleKeyDown=(event:KeyboardEvent):void=>{
        if(event.key==="Enter"){
            handleAddTodo(inputValue)
            setInputValue('')
        }
    }

    return(
        <div className="input-container">
            <input placeholder="Add Task" value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}} onKeyDown={handleKeyDown} />
            <button onClick={()=>{
                if(!inputValue) {return}
                handleAddTodo(inputValue)
                setInputValue('')
            }}>
            <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}