import styled from "styled-components";
import {useNavigate} from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
  return (
    <>
        <HeaderWrap>
            <Title onClick={() => navigate("/")}>OLIVE YOUNG</Title>
            <SearchBar
            type='text'
            placeholder = '검색어를 입력하세요'>
            </SearchBar>
            <Options>
                <p>오늘드림</p>
                <p>올영매장찾기</p>
                <p>최근 본 상품</p>
            </Options>
        </HeaderWrap>
      <div style={{ height: "2px", width: "100%", background: "black" }} />
    </>
  );
}

const Title = styled.p`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 20px;
  margin-left: 100px;
  font-style: italic;
  cursor: pointer;
`;

const SearchBar = styled.input`
    width:300px;
    height:40px;
    border:1px solid green;
    border-radius:24px;
    padding-left:18px;
`
const HeaderWrap = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
  
`
const Options = styled.div`
  display:flex;
  align-items:center;
  gap:20px;

  p{
    color:black;

  }
`