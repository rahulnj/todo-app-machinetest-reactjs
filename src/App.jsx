import TodoScreen from "./screens/TodoScreen/TodoScreen";
import './_base.scss'
import { useEffect, useRef, useState } from "react";
import {
  Calender,
  TaskList
} from "./components";


const App = () => {

  const [taskDetails, setTaskDetails] = useState({ task: '', timer: '', time: '', date: '' })
  const [toggleCalendar, setToggleCalendar] = useState(false)
  const [toggleTaskList, setToggleTaskList] = useState(false)
  const [taskError, setTaskError] = useState(false)
  const [timerError, setTimerError] = useState(false)
  const calenderScreenRef = useRef()


  let TOGGLECOMPONENT;
  if (toggleCalendar) {
    TOGGLECOMPONENT = toggleCalendar
  } else if (toggleTaskList) {
    TOGGLECOMPONENT = toggleTaskList
  }

  useEffect(() => {
    const checkIfClickedOutsideCalendar = (e) => {
      if (TOGGLECOMPONENT && calenderScreenRef.current && !calenderScreenRef.current.contains(e.target)) {
        if (toggleCalendar) {
          setToggleCalendar(false)
        } else if (toggleTaskList) {
          setToggleTaskList(false)
        }
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutsideCalendar)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutsideCalendar)
    }
  }, [toggleCalendar, toggleTaskList, TOGGLECOMPONENT])

  return (
    <div className="main">
      <TodoScreen
        taskError={taskError}
        timerError={timerError}
        taskDetails={taskDetails}
        setTaskError={setTaskError}
        setTimerError={setTimerError}
        setTaskDetails={setTaskDetails}
        setToggleCalendar={setToggleCalendar}
        setToggleTaskList={setToggleTaskList}
      />
      {
        (toggleCalendar && !taskError && !timerError) &&
        <Calender
          taskDetails={taskDetails}
          setTaskDetails={setTaskDetails}
          calenderScreenRef={calenderScreenRef}
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
