import { Tint } from "./Data/Oliveyoung";
import ProductCard from "./Components/ProductCard";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";

export default function App() {
  const navigate = useNavigate();
  const [isClicked,setIsClicked] = useState(false); //카테고리 클릭
  const [isOpen,setIsOpen] = useState(false); //토글 오픈
  const [activeCategory, setActiveCategory] = useState('인기순');
  const categories = ['인기순', '판매순', '신상품순', '할인율순'];


  return (
    <Wrapper>
      <Title onClick={() => navigate("/")}>OLIVE YOUNG</Title>
      <div style={{ height: "2px", width: "100%", background: "black" }} />
      <ResultText>'틴트'에 대한 검색 결과</ResultText>
      <Container>
        <p>총 8개</p>
        <Category>
          {
            categories.map((item)=>(
              <CategoryItem key={item} 
               onClick={()=>setActiveCategory(item)}
               isClicked = {item === activeCategory}>
                {item}
              </CategoryItem>
            ))
          }
          <ToggleContainer>
            <ToggleButton onClick={() => setIsOpen(!isOpen)}>
              가격정렬
            </ToggleButton>
            <ToggleMenu isOpen={isOpen}>
              <MenuItem>낮은가격순</MenuItem>
              <MenuItem>높은가격순</MenuItem>
            </ToggleMenu>
          </ToggleContainer>
        </Category>
      </Container>
      <hr style={{ color: "gray" }} />
      <ProductList>
        {Tint.map((item) => (
          <ProductCard
            key={item.id}
            brand={item.brand}
            name={item.name}
            price={item.price}
            salePrice={item.salePrice}
            image={item.image}
          />
        ))}
      </ProductList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 24px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 20px;
  margin-left: 100px;
  font-style: italic;
  cursor: pointer;
`;
const ResultText = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 20px;
  margin-top:40px;
  margin-left: 100px;
`;
const ProductList = styled.div`
  display: grid;
  grid-template-columns:repeat(4,240px);
  gap:10px;
  flex-wrap: wrap;
  margin-left: 200px;
`;

const Container = styled.div`
  display:flex;
  justify-content:space-around;
  gap:500px;
  margin-left: 100px;
  margin-top:100px;
  p{
    font-size:20px;
    font-weight: 700;
  }
`
const Category = styled.div`
  display:flex;
  gap:10px;
  flex-wrap: wrap;
  align-items:center;

`

const ToggleContainer = styled.div`
  position:relative;
`

const ToggleMenu = styled.div`
  position:absolute;
  top:100%;
  left:0;
  width:70px;
  background:#fff4e5;
  font-size:12px;
  display:flex;
  flex-direction:column;
  gap:10px;
  display: ${props => props.isOpen ? 'block' :'none'};
  padding:5px;
  box-sizing:border-box;
`

const ToggleButton = styled.div`
  cursor: pointer;
  font-size:20px;
  font-weight:700;
`
const MenuItem = styled.div`
  cursor: pointer;
`
const CategoryItem = styled.p`
  font-size: 20px;
  color: ${(props) => (props.isClicked ? "black" : "gray")};
  cursor: pointer;
`;