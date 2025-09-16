import { useState } from "react";
import { TodoForm } from "./TodoForm";
import "./Todo.css";
import { TodoList } from "./Todolist";
import { TodoDate } from "./TodoDate";
import { getLocalStorageData } from "./TodoLocalStorage";
import { setLocalStorageData } from "./TodoLocalStorage";



export const Todo = () => {

    const [task, setTask] = useState(() =>  getLocalStorageData() )


    const handleFormSubmit = (inputValue) => {
        const {id,content,checked} = inputValue

        if (!content) {
            alert("your input feild in empty")
            return
        }
        // if (task.includes(inputValue)) {
        //     alert("Task already exists!");

        //     return;
        // }
        const ifTodoContentMatched =task.find((curlElem) => curlElem.content === content ) 
        if(ifTodoContentMatched) return
        setTask((previousTask) => [...previousTask, {id, content, checked}])


    }
    setLocalStorageData(task)   

    // delete btn
    const handleDelete = (value) => {
        const updatedTask = task.filter((curlElem) => curlElem.content !== value)
        setTask(updatedTask);

    }
    // CLEAR AL
    const handleClearAll = () => {
        setTask([])
    }
    // hanlde checked
    const handleChecked = (content) =>{
        const updatedTask = task.map((curlElem) =>{
            if (curlElem.content === content) {
                return {...curlElem, checked: !curlElem.checked}; 
                
            }else{
                return curlElem
            }
        })
        setTask(updatedTask)
    }
   
    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate />
            </header>
            <TodoForm onAddTodo={handleFormSubmit} />
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curlElem) => {
                            return (
                                <TodoList key={curlElem.id} data={curlElem.content} onHandleDelete={handleDelete} onHandleChecked={handleChecked} checked={curlElem.checked} />
                            )

                        })
                    }
                </ul>

            </section>
            <section>
                <button className="clear-btn" onClick={handleClearAll}>Clear all</button>
            </section>

        </section>
    )
}