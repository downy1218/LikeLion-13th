import styled from "styled-components";

export default function Footer(){
    return(
        <Container>
            <p>© 2025 SKU LIKELION. All rights reserved.</p>
        </Container>
    )
}

const Container = styled.div`
    width:1280px;
    height:63px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-top:50px;
    p{
        color:#B6B6B6;
        font-size:15px;
        margin:0;
    }
`