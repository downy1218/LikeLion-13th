import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "./Components/Header";
function Layout(){
    return(
        <>
            <Header/>
            <Content>
                <Outlet/>
            </Content>
        </>
    )
}


const Content = styled.div`
    margin-top:50px;
`
export default Layout;