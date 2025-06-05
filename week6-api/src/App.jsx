import { Tint } from "./Data/Oliveyoung";
import ProductCard from "./Components/ProductCard";
import styled from "styled-components";
import { useState,useEffect } from "react";
import { itemApi } from "../api/itemApi";


export default function App() {
  const [isClicked,setIsClicked] = useState(false); //카테고리 클릭
  const [isOpen,setIsOpen] = useState(false); //토글 오픈
  const [activeCategory, setActiveCategory] = useState('인기순');
  const categories = ['인기순', '판매순', '신상품순', '할인율순'];
  const [isLoading,setIsLoading] = useState(false); //아이템 정보 로딩상태
  const [error,setError] = useState(null); //로딩 에러 상태


  useEffect(()=>{
    fetchAllItems();
  },[])

  const fetchAllItems = async()=>{
    setIsLoading(true);
    const result = await itemApi.getAllItems('shoes');
    console.log(result.data);
    if(result?.data){
      console.log('아이템 정보 받아오기 성공')
    }else{
      console.log('아이템 정보 받아오기 실패')
    }
    setIsLoading(false);
  }

  if(isLoading){
    return(
      <div style={{color:'black'}}>로딩 중...</div>
    )
  }

  if(error){
    return(
      <div style={{color:'red'}}>아이템을 불러오지 못했습니다 ㅜㅜ</div>
    )
  }

  return (
    <Wrapper>
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

const ResultText = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 20px;
  margin-top:40px;
  margin-left: 170px;
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