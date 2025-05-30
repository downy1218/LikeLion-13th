import styled from "styled-components";

export default function Header(){
    return(
        <Container>
            <h2>LIKELION</h2>
            <Login>로그인</Login>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    h2{
        font-weight:bold;
    }
`
const Login = styled.div`
    width:90px;
    height:35px;
    background:black;
    border-radius:20px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
`
