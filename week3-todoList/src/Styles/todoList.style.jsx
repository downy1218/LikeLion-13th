import styled from 'styled-components';

export const Container = styled.div`
width:600px;
height:700px;
background-color:black;
border-radius:24px;
// display:flex;
// justify-content:center;
// flex-direction:column;
`

export const Title = styled.div`
font-size:30px;
margin:0;
padding-top:30px;
margin-left:230px;
color:white;
`
export const InputContainer = styled.div`
display:flex;
gap:10px;
justify-content:center;
margin-top:30px;
`

export const InsertBar = styled.input`
width: 400px;
height:50px;
border:1px solid white;
border-radius:10px;
padding-left:15px;
`
export const InsertBtn = styled.button`
width:100px;
height:54px;
border:none;
color:black;
background-color:white;
border-radius:10px;
cursor:pointer;

&:hover{
    color:white;
    background-color:black;
    border:1px solid white;
}
`
export const TaskContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:20px;
margin-top:20px;
`
export const TaskCard = styled.div`
width:540px;
height:70px;
border:1px solid white;
border-radius:10px;
background-color:white;
display:flex;
justify-content:space-between;
align-items:center;
`
export const TaskName = styled.input`
margin-left:20px;
color:black;
`
export const DelBtn = styled.button`
width:100px;
height:54px;
border:1px solid red;
color:red;
background-color:white;
border-radius:10px;
cursor:pointer;
margin-right:20px;
&:hover{
    color:white;
    background-color:red;
    border:none;
}
`