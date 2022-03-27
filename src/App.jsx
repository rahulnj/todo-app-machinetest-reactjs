import TodoScreen from "./screens/TodoScreen/TodoScreen";
import './_base.scss'
import { useEffect, useRef, useState } from "react";
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
  const calenderScreenRef = useRef()


  // let TOGGLECOMPONENT;
  // if (toggleCalendar) {
  //   TOGGLECOMPONENT = toggleCalendar
  // } else if (toggleTaskList) {
  //   TOGGLECOMPONENT = toggleTaskList
  // }

  // useEffect(() => {
  //   const checkIfClickedOutsideCalendar = (e) => {
  //     if (TOGGLECOMPONENT && calenderScreenRef.current && !calenderScreenRef.current.contains(e.target)) {
  //       if (toggleCalendar) {
  //         setToggleCalendar(false)
  //       } else if (toggleTaskList) {
  //         setToggleTaskList(false)
  //       }
  //     }
  //   }
  //   document.addEventListener("mousedown", checkIfClickedOutsideCalendar)
  //   return () => {
  //     document.removeEventListener("mousedown", checkIfClickedOutsideCalendar)
  //   }
  // }, [toggleCalendar, toggleTaskList, TOGGLECOMPONENT])

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
          calenderScreenRef={calenderScreenRef}
          timeAndDateError={timeAndDateError}
          setTimeAndDateError={setTimeAndDateError}
          setDisableDurationSlider={setDisableDurationSlider}
        />
      }
      {
        toggleTaskList &&
        <TaskList />
      }

    </div>
  );
}

export default App;
