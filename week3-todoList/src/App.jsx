//import { useState } from 'react';
import "./App.css";
import * as T from "./Styles/todoList.style";
import TodoInsert from "./TodoInsert";
import TaskList from "./TaskList";
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <T.Container>
          <T.Title>To-do List</T.Title>
          <TodoInsert />
          <hr style={{color:'white', marginTop:'20px'}}></hr>
          <TaskList />

      </T.Container>
    </div>
  );
}

export default App;
