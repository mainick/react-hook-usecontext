import React, { useContext } from "react";
import TodoContext from "../contexts/TodoContext";

const TodoList = ({ todos }) => {
    const dispatchTodos = useContext(TodoContext);

    const handleChangeCheckbox = (todo_id) => {
        dispatchTodos({ type: "CHANGE_STATUS", payload: todo_id });
    };

    return (
        <ul>
            {todos.map((item, i) => (
                <li key={item.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={item.complete}
                            onChange={() => handleChangeCheckbox(item.id)}
                        />
                        {item.title}
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
