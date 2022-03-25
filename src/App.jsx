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
  const calenderScreenRef = useRef()
  const taskListRef = useRef()

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
  }, [toggleCalendar, toggleTaskList])

  return (
    <div className="main">
      <TodoScreen
        taskDetails={taskDetails}
        setTaskDetails={setTaskDetails}
        setToggleCalendar={setToggleCalendar}
        setToggleTaskList={setToggleTaskList}
      />
      {
        toggleCalendar &&
        <Calender
          taskDetails={taskDetails}
          setTaskDetails={setTaskDetails}
          calenderScreenRef={calenderScreenRef}
        />
      }
      {
        toggleTaskList &&
        <TaskList
          taskListRef={taskListRef}
        />
      }

    </div>
  );
}

export default App;
