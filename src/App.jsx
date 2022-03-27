import TodoScreen from "./screens/TodoScreen/TodoScreen";
import './_base.scss'
import { useState } from "react";
import {
  Calender,
  TaskList
} from "./components";


const App = () => {

  const [taskDetails, setTaskDetails] = useState
    ({ id: '', task: '', duration: 0, time: '', date: '', isComplete: false, isExeeded: false, isPending: true })
  const [toggleCalendar, setToggleCalendar] = useState(false)
  const [toggleTaskList, setToggleTaskList] = useState(false)
  const [durationError, setDurationError] = useState(false)
  const [taskError, setTaskError] = useState(false)
  const [timeAndDateError, setTimeAndDateError] = useState(false)
  const [disableDurationSlider, setDisableDurationSlider] = useState(true)
  const [showAddButton, setShowAddButton] = useState(false)


  return (
    <div className="main">
      <TodoScreen
        taskError={taskError}
        taskDetails={taskDetails}
        setTaskError={setTaskError}
        showAddButton={showAddButton}
        durationError={durationError}
        setTaskDetails={setTaskDetails}
        setShowAddButton={setShowAddButton}
        timeAndDateError={timeAndDateError}
        setDurationError={setDurationError}
        setToggleCalendar={setToggleCalendar}
        setToggleTaskList={setToggleTaskList}
        disableDurationSlider={disableDurationSlider}
        setDisableDurationSlider={setDisableDurationSlider}
      />
      {
        (toggleCalendar && !taskError) &&
        <Calender
          taskDetails={taskDetails}
          setTaskDetails={setTaskDetails}
          setToggleTaskList={setToggleTaskList}
          setToggleCalendar={setToggleCalendar}
          timeAndDateError={timeAndDateError}
          setTimeAndDateError={setTimeAndDateError}
          setDisableDurationSlider={setDisableDurationSlider}
        />
      }
      {
        toggleTaskList &&
        <TaskList
          setToggleCalendar={setToggleCalendar}
          setToggleTaskList={setToggleTaskList}
        />
      }

    </div>
  );
}

export default App;
