import { Link } from "react-router";
import styled from "styled-components";

function MyNav(){
    return(
        <Container>
            <Page to = '/'>홈</Page>
            <Page to = '/account/nameSetting'>이름 변경하기</Page>
        </Container>
    )
}

const Container = styled.div`
    height:60px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background: #FFEDA8;
    padding: 15px 40px;
`
const Page = styled(Link)`
    font-size:18px;
    color:#363636;
    text-decoration:none;
`

export default MyNav;