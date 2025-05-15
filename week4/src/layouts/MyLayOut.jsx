import { Outlet } from "react-router";
import styled from "styled-components";
import Footer from "../components/Footer";
import MyNav from "../components/MyNav";


function MyLayOut(){
    return(
        <Layout>
            <MyNav/>
            <Main>
                <Outlet/>               
            </Main>
            <Footer/>
        </Layout>
    )
}


const Layout = styled.div`
  min-height: 100vh;
  background: #f4f4f4;
`
const Main = styled.main`
    padding-top:20px;
    padding-left:40px;
    margin-bottom:100px;
`



export default MyLayOut;