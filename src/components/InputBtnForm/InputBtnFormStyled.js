import styled from "styled-components";


export const ContainerInputBtnStyled = styled.form`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`



export const InputStyled = styled.input `
  width: 235px;
  padding: 10px 6px;
  border-radius: 5px;
  border: 1px groove #282c34;
  background-color:  #282c34;
  outline: none;
  color: white;
  box-shadow: 0px 0px 14px 3px rgba(0,0,0,0.39);
-webkit-box-shadow: 0px 0px 14px 3px rgba(0,0,0,0.39);
-moz-box-shadow: 0px 0px 14px 3px rgba(0,0,0,0.39);
 
`

export const BtnSubmitForm = styled.button `
  
  border-radius: 5px;
  padding: 8px 10px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  font-size: 18px;
  transition: 0.3s;
  

  &:hover {
    background-color: orange;
  }
  
`