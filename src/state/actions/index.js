export const addTask = (taskDetails) => {
    let taskList = []
    if (localStorage.getItem("taskList")) {
        taskList = JSON.parse(localStorage.getItem("taskList"))
    }

    let orderedTaskList = [...taskList, taskDetails].sort((a, b) => {
        return parseInt(a?.id) - parseInt(b?.id)
    })

    localStorage.setItem('taskList', JSON.stringify(orderedTaskList))
    return {
        type: "ADD_TASK_SUCCESS",
        payload: taskDetails
    }
}

export const completeTask = (id) => {
    let taskList = []
    if (localStorage.getItem("taskList")) {
        taskList = JSON.parse(localStorage.getItem("taskList"))
    }
    taskList = taskList.map((task) => {
        if (task?.id === id) {
            task.isComplete = true
            task.isPending = false
        }
        return task
    })
    localStorage.setItem('taskList', JSON.stringify(taskList))
    return {
        type: "COMPLETE_TASK",
        payload: taskList
    }
}

export const updateTask = () => {
    let taskList = []
    if (localStorage.getItem("taskList")) {
        taskList = JSON.parse(localStorage.getItem("taskList"))
        taskList = taskList.map((task) => {
            if ((parseInt(task?.id) < new Date().getTime()) && !task?.isComplete) {
                task.isExeeded = true
                task.isPending = false
            }
            return task
        })
    }
    localStorage.setItem('taskList', JSON.stringify(taskList))
    return {
        type: "UPDATE_TASK",
        payload: taskList
    }
}

export const deleteTask = (id) => {
    let taskList = []
    if (localStorage.getItem("taskList")) {
        taskList = JSON.parse(localStorage.getItem("taskList"))
    }
    let updatedTaskList = taskList.filter((task) => (task?.id !== id))
    localStorage.setItem('taskList', JSON.stringify(updatedTaskList))
    return {
        type: "DELETE_TASK",
        payload: updatedTaskList
    }
}


