import { Tint } from "./Data/Oliveyoung";
import ProductCard from "./Components/ProductCard";
import styled from "styled-components";

export default function App() {
  return (
    <Wrapper>
      <Title>OLIVE YOUNG</Title>
      <div style={{height:'2px',width:'100%',background:'black'}}/>
      <ResultText>'틴트'에 대한 검색 결과</ResultText>
      <Container>
        <p>총 8개</p>
        <Category>
          <p>인기순</p>
          <p>판매순</p>
          <p>신상품순</p>
          <p>할인율순</p>
        </Category>
      </Container>
      <hr style={{color:"gray"}}/>
      <ProductList>
        {Tint.map((item)=>(
          <ProductCard 
          key={item.id}
          brand = {item.brand}
          name={item.name} 
          price={item.price}
          salePrice={item.salePrice}
          image={item.image}/>
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
  gap:700px;
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
  p{
    font-size:14px;
  }
`