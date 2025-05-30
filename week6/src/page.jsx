import styled from "styled-components";
import Img1 from './assets/Images/img_1.png';
import Img2 from './assets/Images/img_2.png';
import Img3 from './assets/Images/img_3.png';
import Card from "./Card";


export default function Page(){
    return(
        <Container>
            <h1>안녕하세요,</h1>
            <h1>멋쟁이사자처럼입니다.</h1>
            <Button>멋사 바로가기</Button>
            <ImageBox>
                <Card img = {Img1} smallText='이젠 추억이죠?' bigText="단체OT">
                    <Text>hdjksf</Text>
                </Card>
                <Card img = {Img2} smallText='상상을 현실로' bigText="아이디어톤"/>
                <Card img = {Img3} smallText='우리들의 이야기' bigText="멋사 MT"/>
            </ImageBox>

        </Container>
    )
}

const Text = styled.div`
    position:absolute;
    z-index:5;
    left:0;
`
const Container = styled.div`
    display:flex;
    flex-direction:column;
    h1{
        font-weight:bold;
        display:flex;
        flex-direction:start;
        margin:0;
        font-size:48px;
        text-align:left;
    }
`
const Button = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background:black;
  color:white;
  width:147px;
  height:39px;
  border-radius:20px;
  margin-top:30px;
`

const ImageBox = styled.div`
    display:flex;
    gap:20px;
    margin-top:100px;
    margin-bottom:0;
    position:relative;
    z-index:1;
`