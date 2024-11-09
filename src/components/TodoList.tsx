import { TodoCard } from "./TodoCard";

export function TodoList(props:{
    todos:{input:string,complete:boolean}[],
    selectedTab:string,
    handleDeleteTodo:(index:number)=>void,
    handleCompleteTodo:(index:number)=>void,
}){
    const {todos, selectedTab}=props
    const filteredTodosList=selectedTab==='All'?
    todos:selectedTab=== "Complete" ?
        todos.filter(val=>val.complete) :
        todos.filter(val=>!val.complete)
    return (
        <>
            {filteredTodosList.map((todo,todoIndex)=>{
                return(
                    <TodoCard key={todoIndex} 
                            {...props}
                            todoIndex={todos.findIndex(val=>val.input== todo.input)}
                            todo={todo} />
                )
            })}
        </>
    )
}