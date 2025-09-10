import React, { useState } from "react";

function Home() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos([...todos, { id: Date.now(), text: inputValue }]);
            setInputValue("");
        }
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <div className="container py-4">
                <h1 className="mb-4 text-center">ToDoList</h1>
                <form className="form d-flex gap-2 mb-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        required
                        className="form__input form-control"
                    />
                    <button className="form__btn btn btn-success">Add</button>
                </form>
                <ul className="list-unstyled">
                    {todos.map(todo => (
                        <li key={todo.id} className="todo-item">
                            <span className="todo-item__description">{todo.text}</span>
                            <button 
                                className="todo-item__delete"
                                onClick={() => deleteTodo(todo.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Home;