export function Header(props:{todos:{input:string,complete:boolean}[]}){
    const {todos}=props
    const todoLength:number=todos.length
    const isTaskPlural:boolean=todos.length!=1;

    const isTaskOrTasks:string=isTaskPlural?'tasks':'task';

    return(
        <header>
            <h1 className="text-gradient">You have {todoLength} open {isTaskOrTasks}</h1>
        </header>
    )
}