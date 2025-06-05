// import Img1 from './assets/Images/img_1.png';
// import Img2 from './assets/Images/img_2.png';
// import Img3 from './assets/Images/img_3.png';
import styled from "styled-components"


export default function Card({img,smallText,bigText}){
    return(
        <>  
            <Img src={img}></Img>
            {/* <Layout>
                <Wrapper>
                    <p>{smallText}</p>
                    <h2>{bigText}</h2>
                </Wrapper>
            </Layout> */}
        </>
    )
}

const Img = styled.img`
    position:relative;
    z-index:1;

`
const Layout = styled.div`
    position:absolute;
    z-index:10;
    left:20px;
    top:20px;
    display:flex;
    gap:20px;
`
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
`