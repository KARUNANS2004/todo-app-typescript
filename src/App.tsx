import { useState, useEffect } from 'react'
import {Header} from './components/Header'
import {Tabs} from './components/Tabs'
import {TodoInput} from './components/TodoInput'
import {TodoList} from './components/TodoList'


function App() {
  const [todos,setTodos]=useState<{input:string,complete:boolean}[]>([])

  const [selectedTab,setSelectedTab]=useState<string>('Open')

  function handleAddTodo(newTodo:string):void{
    const newTodoList:{input:string,complete:boolean}[]=[...todos,{input:newTodo,complete:false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index:number):void{
    let newTodoList=[...todos]
    let completeTodo=newTodoList[index]
    completeTodo['complete']=true;
    newTodoList[index]=completeTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index:number):void{
    let newTodoList=todos.filter((val,valIndex)=>{
      console.log(val)
      return !(valIndex===index);
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  
  useEffect(() => { 
    const localStorageKey = 'todo-app-typescript'; 
    if (!localStorage || !localStorage.getItem(localStorageKey)) { 
      return; 
    } 
    const storedData = localStorage.getItem(localStorageKey); 
    if (storedData) {
       try { 
        let db: { todos: { input: string; complete: boolean }[] } = JSON.parse(storedData); 
        setTodos(db.todos); 
      } catch (error) { 
        console.error("Failed to parse stored data:", error); 
      } 
    } 
  }, []);

  function handleSaveData(currentTodos:{input:string,complete:boolean}[]){
    localStorage.setItem('todo-app-typescript',JSON.stringify({todos:currentTodos}))
  }

  return(
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} selectedTab={selectedTab}  />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
