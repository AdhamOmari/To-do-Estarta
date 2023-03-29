import * as TODO_CONST from './constant'



export const ADD_Data = (name) => {
    return {
        type: TODO_CONST.ADD_TO_TODO,
        payload: name,
    };
};



export const deleteTodo = (index) => {
    return {
        type: TODO_CONST.REMOVE_TODO,
        payload: index
    };
};

export const Edit_Data = (id, newName) => ({
    type: TODO_CONST.EDIT_TODO,
    payload: { id, newName }
});

export const Done_action = (index) => {
    return {
        type: TODO_CONST.DONE_TODO,
        payload: index
    }
}