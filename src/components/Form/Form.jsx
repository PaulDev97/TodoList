import React from 'react'
import { FormStyled } from './FormStyled'
import InputBtnFormData from '../InputBtnForm/InputBtn'
import Task from '../TaskList/Task'



const Form = () => {

  return (
    <FormStyled>

      <InputBtnFormData/>
      <Task/>
      
    </FormStyled>
  )
}

export default Form
