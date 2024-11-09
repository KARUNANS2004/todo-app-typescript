import React from "react";

export function Tabs(props:{
    todos: { input: string; complete: boolean }[], 
    selectedTab: string, 
    setSelectedTab: React.Dispatch<React.SetStateAction<string>>
}){
    const {todos, selectedTab, setSelectedTab}=props;
    const tabs=['All','Open','Complete'];
    return(
        <nav className="tab-container">
            {
                tabs.map((tab,tabIndex)=>{
                    const numberOfTasks:number=tab==="All"?
                        todos.length:
                        tab==='Open'?
                            todos.filter((e)=>!e.complete).length:
                            todos.filter((e)=>e.complete).length;

                        return(
                            <button onClick={()=>{
                                setSelectedTab(tab)
                            }} key={tabIndex} className={"tab-button " + (tab===selectedTab ? "tab-selected":"")}>
                                <h4>{tab} <span>({numberOfTasks})</span></h4>
                            </button>
                        )
                })
            }
            <hr />
        </nav>
    )
}