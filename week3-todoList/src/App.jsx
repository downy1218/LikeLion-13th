import { useState } from 'react';
import * as T from "./Styles/todoList.style";
import TodoInsert from "./Components/TodoInsert";
import TaskList from "./Components/TaskList";

function App() {
  const [task, setTask] = useState(''); //사용자가 입력하는 값
  const [taskName,setTaskName] = useState([]); //리스트에 보일 값

  const handleTaskValue = (e)=>{
    setTask(e.target.value);
    console.log(task)
  };
  const handleSetTask = ()=>{
    if(task.trim() != ''){
      setTaskName([{id:Date.now(),text:task,completed:false},...taskName]);
      console.log('taskName:',taskName);
      setTask(''); //입력필드 초기화
    }
  };
  const handleDelete = (id)=>{
    setTaskName(taskName.filter((item)=>item.id != id))
  };

  //체크박스 체크하는 함수 
  const handleToggle = (id)=>{
    setTaskName(taskName.map((item)=>(
      (item.id === id ? {...item, completed:!item.completed} : item)
    )))
  }

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <T.Container>
          <T.Title>To-do List</T.Title>

          <TodoInsert
            value={task}
            onChange={handleTaskValue}
            onClick={handleSetTask} 
          />
          <hr style={{color:'white', marginTop:'20px'}}></hr>
        
          <TaskList 
            taskName={taskName}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />

      </T.Container>
    </div>
  );
}

export default App;
