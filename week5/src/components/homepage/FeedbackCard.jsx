import styled from "styled-components";
import Light from '../../assets/images/light.svg';

function FeedbackCard(){
    return(
        <Container>
            <Img src={Light}></Img>
            <Texts>
                <h2>성실히 후기를 작성 해주신 분들에게는!</h2>
                <p>딱히 별건 없지만 미래의 해커톤 발전에 큰 도움이 되는데 많은 후기 작성 부탁합니다.</p>
            </Texts>
        </Container>
    )
}


const Container = styled.div`
width: 1350px;
height: 800px;
flex-shrink: 0;
border-radius: 52px;
border: 1px solid #FF6370;
background: #1C1C1C;
`

const Img =styled.img`
width: 69px;
height: 69px;
flex-shrink: 0;
padding-left:650px;
padding-top:87px;
`

const Texts = styled.div`
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

export default FeedbackCard;