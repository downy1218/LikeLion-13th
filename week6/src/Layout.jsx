import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

function Layout(){
    return(
        <>
            <Header/>
            <Content>
                <Outlet/>
            </Content>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}


const Content = styled.div`
    margin-top:50px;
`
export default Layout;