import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
    const [inputValue, setinputValue] = useState({});
    const handleInputchange = (value) => {
        setinputValue({id: value, content: value, checked: false})
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onAddTodo(inputValue)
        setinputValue({id: "", content: "", checked: false});

    }
    return (
        <section className="form ">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" autoComplete="off" className="todo-input" value={inputValue.content} onChange={(e) => handleInputchange(e.target.value)} />
                </div>
                <div>
                    <button type="submit" className=" todo-btn">
                        Add Task
                    </button>
                </div>

            </form>

        </section>
    )
}