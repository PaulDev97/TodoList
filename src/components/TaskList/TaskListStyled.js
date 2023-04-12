import styled from "styled-components";



export const TasksContainer = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: auto;
  
`


export const NotTaskStyled = styled.div `
  width: 295px;
  padding: 6px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  
  & > span {
    font-size: 30px;
    margin-bottom: 5px;
  }
`

export const TaskStyled = styled.div`
  width: 295px;
  padding: 6px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: #282c34;
  box-shadow: 0px 0px 14px 3px rgba(0,0,0,0.39);
-webkit-box-shadow: 0px 0px 14px 3px rgba(0,0,0,0.39);
-moz-box-shadow: 0px 0px 14px 3px rgba(0,0,0,0.39);

`

export const SpanContentStyled = styled.p`
  width: 80%;
  word-wrap: break-word;
  margin-left: 2px;
`


export const BtnDeleteStyled = styled.button `
  width: 25px;
  cursor: pointer;
  border-radius:2px;
  outline: none;
  border: 1px groove #282c34;
  padding: 4px 0;
  background-color: #282c34;
  transition: 0.3s;

  &:hover {
    text-shadow: red 0 0 10px, red 0 0 14px, red 0 0 36px;
  }
  
`