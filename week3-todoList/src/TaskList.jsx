import * as T from "./Styles/todoList.style";
function TaskList(){
    return(
        <T.TaskContainer>
            <T.TaskCard>
                <T.TaskName 
                type="checkbox"
                
                >
                </T.TaskName>
                <T.DelBtn>del</T.DelBtn>
            </T.TaskCard>
        </T.TaskContainer>
    )
}

export default TaskList;