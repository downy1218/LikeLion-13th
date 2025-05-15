import { useNavigate } from "react-router";
import { useState } from "react";
import styled from "styled-components";

function NameSetting(){
    const [name,setName] = useState('');
    const navigate = useNavigate();
    const handleChange = (e)=>{
        const newName = e.target.value;
        if(newName.trim() !==''){
            console.log('name:',name)
            setName(newName);
            localStorage.setItem('name',JSON.stringify(name))
            console.log('localStorage',localStorage);
        }
    }

    return(
        <Container>
            <h2>변경할 이름을 작성해주세요 ^-^</h2>

                <Input
                    type="text"
                    placeholder="이름을 입력하세요.."
                    onChange={handleChange}
                    value={name}
                >
                </Input>
            <Save onClick={()=>navigate('/account')}>저장</Save>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Save = styled.button`
    width:60px;
    height:20px;
    background:none;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
`
const Input = styled.input`
    width:400px;
    height:40px;
    padding-left:20px;
    margin-bottom:40px;
`

export default NameSetting;