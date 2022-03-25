import TodoScreen from "./screens/TodoScreen/TodoScreen";
import './_base.scss'
import { useState } from "react";
import CalenderScreen from "./screens/CalenderScreen/CalenderScreen";

const App = () => {

  const [taskDetails, setTaskDetails] = useState({ task: '', timer: '', time: '', date: '' })
  const [toggleCalendar, setToggleCalendar] = useState(false)

  return (
    <div className="main">
      <TodoScreen
        taskDetails={taskDetails}
        setTaskDetails={setTaskDetails}
        setToggleCalendar={setToggleCalendar}
      />
      {
        toggleCalendar &&
        <CalenderScreen
          taskDetails={taskDetails}
          setTaskDetails={setTaskDetails}
        />
      }

    </div>
  );
}

export default App;
