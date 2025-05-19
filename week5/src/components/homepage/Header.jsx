import styled from 'styled-components';
import IDT from '../../assets/images/IDT.svg';

function Header(){
    return(
        <Container>
            <Img src={IDT}/>
            <Category>
                <p>About</p>
                <p>Project</p>
                <p>Diary</p>
                <p>QnA</p>
            </Category>
            
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    height:100px;

`
const Img = styled.img`
    width: 115px;
    height: 67px;
    margin: 40px 100px;
`
const Category = styled.div`
  display: flex;
  gap: 60px;
  margin: 40px 700px;
  width: 1920px;
  height: 2530px;
  p {
    color: #a7a7a7;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export default Header;