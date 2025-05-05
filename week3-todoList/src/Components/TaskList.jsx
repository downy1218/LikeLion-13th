import * as T from "../Styles/todoList.style";
function TaskList({taskName,onDelete,onToggle}){
    return(
        <T.TaskContainer>
            {taskName && taskName.length > 0 ?(
                taskName.map((task)=>(
                    <T.TaskCard key={task.id}>
                        <T.TaskName
                        type="checkbox"
                        checked={task.completed}
                        onChange={()=>onToggle(task.id)}
                        id={task.id}
                        />
                        <label htmlFor={task.id} style={{
                            textDecoration:task.completed ? 'line-through':'none'
                        }}>
                            {task.text}
                        </label>
                        
                        <T.DelBtn onClick={()=>onDelete(task.id)}>del</T.DelBtn>
                    </T.TaskCard>
                ))
            ):(<h2 style={{color:'white'}}>할 일이 없습니다</h2>)}
        </T.TaskContainer>
    )
}

export default TaskList;