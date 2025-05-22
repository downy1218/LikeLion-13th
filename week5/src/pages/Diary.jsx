import Header from "../components/homepage/Header";
import Search from "../components/homepage/Search";
import styled from "styled-components";
import GreenSun from '../assets/images/greenSun.svg';
import Photo from '../assets/images/photo.jpg';
import ScorePhoto from '../assets/images/score.png';
import Talksick from '../assets/images/talksick.png';

export default function Diary(){
    return(
        <div>
            <Wrapper>
                <Header/>
                <Search/>
            </Wrapper>

            <Content>
                <Intro>
                    <img src={GreenSun} alt="GreenSun" />
                    <h1>Diary</h1>
                </Intro>
                <h2>2025 서경대학교 아이디어톤의 소감을 적는 곳 입니다. 
                    여러분이 느꼈던 모든 것을 적어주세요!<br/>이미지를 올리셔도 됩니다. 
                    배치도 자유롭게 설정할 수 있어요! 방명록이라고 편하게 생각 부탁함~</h2>
                
                <Button>방명록 쓰러 가기</Button>
    
                <YellowBox>다들 <br/>사랑해요호 !!!!!!!</YellowBox>
                <GreenBox>최강동아리멋사 <br/>그 중 서경대가 최강 </GreenBox>
                <BlueBox>내가더더더</BlueBox>
                <GroupPhoto src={Photo}/>
                <PinkBox>
                    <p>글씨를 이렇게도 작게 쓸 수 있어요 
                    그치만 이렇게 쓰면 안보이겠죠? 시원하게 씁시다 
                    글씨를 이렇게도 작게 쓸 수 있어요 그치만 이렇게 쓰면 안보이겠죠? 
                    시원하게 씁시다 글씨를 이렇게도 작게 쓸 수 있어요 
                    그치만 이렇게 쓰면 안보이겠죠? 시원하게 씁시다</p>
                </PinkBox>
                <TalksickPhoto src={Talksick}/>
                <PurpleBox>
                    여기 후기 쓰는 곳임
                    <br/>그래서 제 소감은요...<br/>이하생략
                </PurpleBox>
                <ScorePhoto1 src={ScorePhoto}/>
            </Content>
        </div>
    )
}


const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Content = styled.div`
  margin-left: 65px;
  h2 {
    color: #7c7c7c;
    font-family: "Pretendard";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    margin-top: 16px;
  }
`;
const Intro = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 80px;
  img {
    width: 51px;
    height: 51px;
  }
  h1 {
    color: #1c1c1c;
    font-family: "Pretendard";
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: 65px;
    margin: 0;
  }
`;
const Button = styled.button`
  width: 300px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #00ce52;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  border:none;
  font-size:25px;
  box-sizing: border-box;
  padding:30px 50px;
  margin-top:30px;
  position:relative; //버튼을 기준으로 
`;


const YellowBox = styled.div`
  z-index:1;
  position:absolute;
  top:700px;
  width:682px;
  height: 676px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #ffd15b;
  box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.2);
  font-size: 98px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: center;
`;
const GreenBox = styled.div`
  z-index:2;
  position: absolute; 
  left:640px;
  top:800px;
  width: 684px;
  height: 451px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #bee317;
  box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.2);
  font-size: 98px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: center;
`;

const GroupPhoto = styled.img`
  width: 700px;
  height: 375px;
  transform: rotate(13.168deg);
  flex-shrink: 0;
  position: absolute;
  z-index: 1;
  top:1700px;
  left:700px;
`;
const BlueBox = styled.div`
  z-index:2;
  position:absolute;
  top:1900px;
  left:300px;
  width: 390px;
  height: 200px;
  transform: rotate(-6.481deg);
  flex-shrink: 0;
  border-radius: 16px;
  background: #5a5dff;
  box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.2);
  color:white;
  text-align: center;
  font-size:70px;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const PinkBox = styled.div`
  border-radius: 16px;
  background: #ff7984;
  box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.2);
  width: 522px;
  height: 537px;
  flex-shrink: 0;
  position:absolute;
  z-index:1;
  top:2300px;
  left:400px;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:40px;
  p{
    width:500px;
    height:527px;
    color:white;
    font-size:40px;
  }
`;

const TalksickPhoto = styled.img`
  position:absolute;
  z-index:2;
  width: 473px;
  height: 537px;
  flex-shrink: 0;
  border-radius: 16px;
  box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.2);
  top:2800px;
  left:100px;
`;

const PurpleBox = styled.div`
  width: 665px;
  height: 444px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #593a6d;
  box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.2);
  position:absolute;
  z-index:2;
  top:3100px;
  left:800px;
  color:white;
  font-size:70px;
  display:flex;
  padding:40px;
  box-sizing: border-box;
`;

const ScorePhoto1 = styled.img`
  border-radius: 16px;
  box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.2);
  width: 934px;
  height:933px;
  flex-shrink: 0;
  position:absolute;
  z-index:2;
  top:3800px;
  left:300px;
`;