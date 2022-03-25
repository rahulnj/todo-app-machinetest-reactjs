import TodoScreen from "./screens/TodoScreen/TodoScreen";
import './_base.scss'
import { useState } from "react";
import CalenderScreen from "./screens/CalenderScreen/CalenderScreen";

const App = () => {
  const [toggleCalendar, setToggleCalendar] = useState(false)
  return (
    <div className="main">
      <TodoScreen
        setToggleCalendar={setToggleCalendar}
      />
      {
        toggleCalendar && <CalenderScreen />
      }

    </div>
  );
}

export default App;
