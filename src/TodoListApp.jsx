import React from 'react'
import Form from './components/Form/Form'
import { ContainerAppStyled, TitleAppStyled } from './TodoListAppStyled'



const TodoListApp = () => {
  return (
    <ContainerAppStyled>
      <TitleAppStyled>Todo List 📝</TitleAppStyled>
      <Form/>
    </ContainerAppStyled>
  )
}

export default TodoListApp
