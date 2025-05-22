import styled from "styled-components"
import SearchIcon from '../../assets/images/search.svg';

export default function Search(){


    return(
        <Container>
            <Input 
                type="text" 
                placeholder="키워드를 입력하세요"
            />
            <img src={SearchIcon}/>
            <WhiteOne>→</WhiteOne>
        </Container>
    )
}
    const Input = styled.input`
        width: 220px;
        height: 35px;
        border-radius: 100px;
        background: #1C1C1C;
        position:relative;
        color:white;
        padding-left:40px;
    `
    const Container = styled.div`
        display:flex;
        align-items:center;
        position:absolute;
        img{
            position:absolute;
            left:15px;
        }
    `
    const WhiteOne = styled.div`
        width:30px;
        height:30px;
        border-radius:50%;
        background:white;
        position: absolute;
        right: 5px; // Input 안쪽 오른쪽에 배치
        display:flex;
        justify-content:center;
        align-items:center;
    `