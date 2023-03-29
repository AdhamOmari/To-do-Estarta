import * as TODO_CONST from "./constant";

const initialState = {
    todos: [],
};

export const AddToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_CONST.ADD_TO_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { name: action.payload, done: false },
                ],
            };
        case TODO_CONST.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((item, index) => index !== action.payload)
            };


        case TODO_CONST.EDIT_TODO:
            const { id, newName } = action.payload;
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    if (index === id) {
                        return { ...todo, name: newName };
                    }
                    return todo;
                })
            };
        case TODO_CONST.DONE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    if (index === action.payload) {
                        return { ...todo, done: true };
                    }
                    return todo;
                })
            };


        default:
            return state;
    }
};