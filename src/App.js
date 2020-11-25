import React, { useState, useReducer } from "react";
import { v4 as uuid } from "uuid";
import FilterTodos from "./components/FilterTodos";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import TodoContext from "./contexts/TodoContext";

const initialTodos = [
    {
        id: uuid(),
        title: "imparare React",
        complete: true,
    },
    {
        id: uuid(),
        title: "imparare gli state",
        complete: false,
    },
    {
        id: uuid(),
        title: "imparare i componenti funzionali",
        complete: false,
    },
];

const filterReducer = (state, action) => {
    switch (action.type) {
        case "SHOW_ALL":
            return "ALL";
        case "SHOW_COMPLETE":
            return "COMPLETE";
        case "SHOW_INCOMPLETE":
            return "INCOMPLETE";
        default:
            throw new Error("no matching action type");
    }
};

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            // l'action viene fornita aggiungendo un payload, il nuovo elemento todo,
            //  da concatenarlo all'elenco nello stato corrente
            return [...state, action.payload];
        case "CHANGE_STATUS":
            // l'action viene fornita aggiungendo un payload, l'id dell'elemento todo,
            // per identificare l'elemento dove modificare lo stato completo / non completo
            return state.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, complete: !item.complete };
                } else {
                    return item;
                }
            });
        default:
            throw new Error("no matching action type");
    }
};

const App = () => {
    const [type_status, dispatchFilter] = useReducer(filterReducer, "ALL");
    const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);

    let filterTodos = todos.filter((todo) => {
        let result = false;
        if (type_status === "ALL") result = true;
        if (type_status === "COMPLETE" && todo.complete) result = true;
        if (type_status === "INCOMPLETE" && !todo.complete) result = true;
        return result;
    });

    return (
        <TodoContext.Provider value={dispatchTodos}>
            <FilterTodos dispatch={dispatchFilter} />
            <div>
                <TodoList todos={filterTodos} />
                <AddTodo />
            </div>
        </TodoContext.Provider>
    );
};

export default App;
