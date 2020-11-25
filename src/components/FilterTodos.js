import React from "react";

const FilterTodos = ({ dispatch }) => {
    const handleShowAll = (e) => {
        dispatch({ type: "SHOW_ALL" });
    };

    const handleShowComplete = (e) => {
        dispatch({ type: "SHOW_COMPLETE" });
    };

    const handleShowIncomplete = (e) => {
        dispatch({ type: "SHOW_INCOMPLETE" });
    };

    return (
        <div>
            <strong>Mostra</strong>
            <button type="button" onClick={handleShowAll}>
                tutto
            </button>
            <button type="button" onClick={handleShowComplete}>
                completati
            </button>
            <button type="button" onClick={handleShowIncomplete}>
                non completati
            </button>
        </div>
    );
};

export default FilterTodos;
