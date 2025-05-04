import * as T from "./Styles/todoList.style";
function TodoInsert(){
    return(
        <T.InputContainer>
            <T.InsertBar 
            type="text"
            placeholder="Add your tasks.."
            //onChange={onChange}
            >
            </T.InsertBar>
            <T.InsertBtn>Add</T.InsertBtn>
        </T.InputContainer>
    )
}

export default TodoInsert;