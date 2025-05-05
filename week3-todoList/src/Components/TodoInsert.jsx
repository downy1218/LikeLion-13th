import * as T from "../Styles/todoList.style";

function TodoInsert({value,onChange,onClick}){
    return(
        <T.InputContainer>
            <T.InsertBar 
            type="text"
            placeholder="Add your tasks.."
            value={value}
            onChange={onChange}
            >
            </T.InsertBar>
            <T.InsertBtn onClick={onClick}>Add</T.InsertBtn>
        </T.InputContainer>
    )
}

export default TodoInsert;