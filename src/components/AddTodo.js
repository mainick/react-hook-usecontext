import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import TodoContext from "../contexts/TodoContext";

const AddTodo = () => {
    const [task, setTask] = useState("");
    const dispatchTodos = useContext(TodoContext);

    const onChangeText = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === "") return;

        let newTodo = { id: uuid(), title: task, complete: false };
        dispatchTodos({ type: "ADD_ITEM", payload: newTodo });
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                placeholder="aggiungi todo"
                onChange={onChangeText}
            />
        </form>
    );
};

export default AddTodo;
