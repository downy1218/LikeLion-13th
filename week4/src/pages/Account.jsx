import styled from "styled-components";
import { useState,useEffect } from "react";

function Account(){
    const [name,setName] = useState('배다은');
    
    //로컬에 저장된 값 가져오기
    useEffect(()=>{
        const newName = localStorage.getItem('name');
        if(newName){
            setName(JSON.parse(newName));
        }
    },[])

    return(
        <Container>
            <Profile src="/keroro.webp"></Profile>
            <p>이름: {name}</p>
            <p>나이: 24</p>
            <p>사는 곳: 인천</p>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:70px;
`
const Profile = styled.img`
    width:100px;
    height:100px;
    border-radius:50%;
    object-fit:cover;
    loading:lazy;
`


export default Account;