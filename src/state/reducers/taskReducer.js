const initialState = {
    taskList: []
}


export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                taskList: [
                    ...state.taskList,
                    {
                        data: action.payload.data
                    }
                ]
            }
        case "DELETE_TASK":
            console.log(state.taskList);
            const newTaskList = state.taskList.filter((task) => (task.data.id != action.id))
            return {
                ...state,
                taskList: newTaskList
            }
        default:
            return state;
    }
}


