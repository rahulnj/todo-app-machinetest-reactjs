export const addTask = (taskDetails) => {
    return {
        type: "ADD_TASK",
        payload: {
            data: { ...taskDetails, id: new Date().getTime().toString() }
        }
    }
}

export const deleteTask = (id) => {
    return {
        type: "DELETE_TASK",
        id
    }
}