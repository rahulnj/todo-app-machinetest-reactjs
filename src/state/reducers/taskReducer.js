const initialState = {
    taskList: localStorage.getItem("taskList") ? JSON.parse(localStorage.getItem("taskList")) : [],
    success: false
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK_SUCCESS":
            return {
                ...state,
                taskList: [
                    ...state.taskList,
                    action.payload
                ],
                success: true
            }

        case "COMPLETE_TASK":
            return {
                ...state,
                taskList: action.payload,
                success: true
            }

        case "DELETE_TASK":
            return {
                ...state,
                taskList: action.payload,
                success: true
            }

        case "UPDATE_TASK":
            return {
                ...state,
                taskList: action.payload,
                success: true
            }
        default:
            return state;
    }
}




