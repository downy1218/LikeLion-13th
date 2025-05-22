import styled from "styled-components";
import Light from "../../assets/images/light.svg";
import face1 from "../../assets/images/face1.png";
import face2 from "../../assets/images/face2.png";
import face3 from "../../assets/images/face3.png";

function FeedbackCard() {
  return (
    <Container>
      <Img src={Light}></Img>
      <Texts>
        <h2>성실히 후기를 작성 해주신 분들에게는!</h2>
        <p>
          딱히 별건 없지만 미래의 해커톤 발전에 큰 도움이 되는데 많은 후기 작성
          부탁합니다.
        </p>
      </Texts>
      <CardWrapper>
        <Card>
          <img src={face1} alt="mimoticon1"></img>
          <BoldText color="#FF6370">정말 최고의 경험!</BoldText>
          <GrayBox>
            <Strong>진짜 완전 백퍼 진심</Strong>
            <CardDescription>
              힘들긴 해도 그만큼의 보람이 있었어요. <br />여러분들도 그랬나요?
            </CardDescription>
          </GrayBox>
        </Card>
        <Card>
          <img src={face2} alt="mimoticon2"></img>
          <BoldText color="#01D354">저 진짜 한 번 더하고 싶어요</BoldText>
          <GrayBox>
            <Strong>이건 백퍼 진심은 아님</Strong>
            <CardDescription>
              한 번 더하기엔 몸이 버티질 못할 것 같아요.<br />중앙톤 열심히 해야지!
            </CardDescription>
          </GrayBox>
        </Card>
        <Card>
          <img src={face3} alt="mimoticon3" />
          <BoldText color="#FFB801">밤샘의 가치가 있다</BoldText>
          <GrayBox>
            <Strong>요건 80퍼센트 진심</Strong>
            <CardDescription>
              밤샘은 건강에 좋지 않기 때문입니다. <br />밤샘하지 않도록 미리미리 작업합시다!
            </CardDescription>
          </GrayBox>
        </Card>
      </CardWrapper>
    </Container>
  );
}

const CardDescription = styled.p`
  font-size: 14px;
  margin-top: 8px;
  line-height: 1.4;
  color: #1c1c1c;
  text-align: center;
  font-style: normal;
  font-weight: 500;
`;
const Container = styled.div`
  width: 1350px;
  height: 900px;
  flex-shrink: 0;
  border-radius: 52px;
  border: 1px solid #ff6370;
  background: #1c1c1c;
`;

const Img = styled.img`
  width: 69px;
  height: 69px;
  flex-shrink: 0;
  padding-left: 650px;
  padding-top: 87px;
`;

const Texts = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    margin: 0;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  img {
    padding-left:30px;
    width: 300px;
    height: 300px;
    -webkit-user-drag: none;
  }
`;
const BoldText = styled.h2`
  color: ${({ color }) => color || "#ff6370"};
  font-family: "Pretendard";
  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: 65px;
  margin: 0;
  display: flex;
  justify-content: center;
`;
const GrayBox = styled.div`
  width: 350px;
  height: 200px;
  border-radius: 20px;
  background: #d2d2d2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  p {
    margin: 0;
  }
`;

const Strong = styled.h2`
  color: #1c1c1c;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top:0;
`;

export default FeedbackCard;
