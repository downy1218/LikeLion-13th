import styled from "styled-components";

export default function ProductCard({ brand, name, price, salePrice, image }) {
  console.log('brand:', brand);
  return (
    <Card>
      <ProductImage src={image} alt={name} />
      <BrandName>{brand}</BrandName>
      <ProductName>{name}</ProductName>
      <Price>
        <ProductPrice>{price}</ProductPrice>
        <SalePrice>{salePrice}</SalePrice>
      </Price>
      <Notice>
        <Sale>세일</Sale>
        <TodayDream>오늘드림</TodayDream>
      </Notice>
    </Card>
  );
}

const Card = styled.div`
  width: 240px;
  height:347px;
  margin-bottom:80px;
  -webkit-user-drag:none;
  cursor: pointer;
`;

const BrandName = styled.p`
  display:flex;
  justify-content:center;
  color:gray;
  font-size:17px;
  font-weight:700;
  margin:0;
`
const Price = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  width:240px;
  height:25px;
  margin-top:30px;
`

const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #4c4c4cb9;
  text-decoration:line-through;
  margin:0;
`;

const SalePrice = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff2424;
  margin:0;
`;
const ProductImage = styled.img`
  width: 240px;
  height:240px;
  object-fit:contain;
`;

const ProductName = styled.h3`
  font-size: 1.1rem;
  margin: 10px 0 5px;
  height:40px;
  margin-bottom:0;
  text-align:center;
`;

const Notice = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  gap:10px;
  font-size:12px;
  margin-top:10px;
`
const Sale = styled.div`
  width:40px;
  height:18px;
  background-color:#f65c60;
  color:white;
  border-radius:10px;
  display:flex;
  justify-content:center;
  align-items:center;
`
const TodayDream = styled.div`
  width:60px;
  height:18px;
  background-color:#f374b7;
  color:white;
  border-radius:10px;
  display:flex;
  justify-content:center;
  align-items:center;
`