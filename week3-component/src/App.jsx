import { useState } from "react";
import Profile from "./Profile";
import styled from 'styled-components';

function App() {
  const [time, setTime] = useState(0);
  const[text,setText] = useState('');
  const profiles = [
    {name:"배다은", intro:'안녕하세요 배다은 입니다', viewCount:1500},
    {name:"김다은", intro:'안녕하세요 김다은 입니다', viewCount:2500},
    {name:"최다은", intro:'안녕하세요 최다은 입니다', viewCount:3500}
  ];

  const handleTime = () => {
    setTime(time+1)
  };
  const handleTimezero = ()=>{
    setTime(0)
  };
  const handleText = (e)=>{
    setText(e.target.value);
  };
  return (
    <>
      <div style={{display:'flex',gap:'20px'}}>
        <Button>버튼</Button>
        <Button2>버튼2</Button2>
      </div>

      {profiles.map((item)=>{
        return(
          <Profile
          key={item.name}
          name={item.name}
          intro={item.intro}
          viewCount={item.viewCount}/>
        )
      })}

      <p>현재시간: {time} 시</p>
      <button onClick={handleTime}>업데이트</button>
      <button onClick={handleTimezero}>초기화</button>

      <div>
        <h2>event handler</h2>
        <input style={{width:'400px',height:'40px',fontSize:'20px', paddingLeft:'10px'}}
          type="text"
          value={text}
          onChange={handleText}
          />
        <button 
          style={{width:'100px',height:'40px'}}
          onClick={()=>alert(text)}>입력</button>
        <div>{text}</div>
      </div>
    </> 
  );
}



const Button = styled.button`
  width:100px;
  height:50px;
  background-color:pink;
  font-size:20px;
  border:none;
  border-radius:10px;
  cursor:pointer;

`
const Button2 = styled.button`
  width:100px;
  height:50px;
  background-color:gray;
  font-size:20px;
  border:none;
  border-radius:10px;
  color:white;
  cursor:pointer;
`
export default App;
