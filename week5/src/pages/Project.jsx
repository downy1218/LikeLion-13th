import Header from "../components/homepage/Header";
import Search from "../components/homepage/Search";
import styled from "styled-components";
import RedSun from '../assets/images/redSun.svg';
import Pj1 from '../assets/images/pj1.png';
import Pj2 from '../assets/images/pj2.png';
import Pj3 from '../assets/images/pj3.png';
import Pj4 from '../assets/images/pj4.png';
import Pj5 from '../assets/images/pj5.png';
import Pj6 from '../assets/images/pj6.png';
import Pj7 from '../assets/images/pj7.png';
import Pj8 from '../assets/images/pj8.png';

export default function Project(){
    const projectImages = [
        { id: 1, src: Pj1, alt: 'Project 1' },
        { id: 2, src: Pj2, alt: 'Project 2' },
        { id: 3, src: Pj3, alt: 'Project 3' },
        { id: 4, src: Pj4, alt: 'Project 4' },
        { id: 5, src: Pj5, alt: 'Project 5' },
        { id: 6, src: Pj6, alt: 'Project 6' },
        { id: 7, src: Pj7, alt: 'Project 7' },
        { id: 8, src: Pj8, alt: 'Project 8' },
    ];
    return(
        <div>
            <Wrapper>
                <Header/>
                <Search/>
            </Wrapper>
            <Content>
                <Intro>
                    <img src={RedSun} alt="redSun" />
                    <h1>Project</h1>
                </Intro>
                <h2>2025 서경대학교 아이디어톤의 프로젝트 파일입니다. 
                    클릭하여 상세한 정보를 확인하세요! 
                    <br/>모아 놓으니 더 예쁘네요. 다들 너무 수고하셨습니다!</h2>
                
                <Projects>
                    {projectImages.map((item)=>(
                        <img key={item.id} src={item.src}/>
                    ))}
                </Projects>
            
            </Content>
        </div>
    )
}


    const Wrapper = styled.div`
        display:flex;
        align-items:center;
    `
    const Content = styled.div`
      margin-left: 65px;
      h2 {
        color: #7c7c7c;
        font-family: 'Pretendard';
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
        margin-top:16px;
      }
    `;
    const Intro = styled.div`
      display: flex;
      align-items: center;
      gap: 25px;
      margin-top:80px;
      img{
        width: 51px;
        height: 51px;
      }
      h1 {
        color: #1c1c1c;
        font-family: 'Pretendard';
        font-size: 52px;
        font-style: normal;
        font-weight: 700;
        line-height: 65px; 
        margin:0;
      }
    `;

    const Projects = styled.div`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap:38px;
      width: 1122px;
      align-items:center;
      margin:0 auto;
      img {
        width: 542px;
        height: auto;
        flex-shrink: 0;
        aspect-ratio: 421/237;
      }
    `;