

import React, { useRef, useState } from 'react'
import { BtnSubmitForm, ContainerInputBtnStyled, InputStyled } from '../InputBtnForm/InputBtnFormStyled'
import { addTask } from '../../toolkit/taskListSlice'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'

const InputBtnFormData = () => {

  const form = useRef()

  const [task, setTask] = useState({
    id:'',
    tasks:'',
  })

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name] : e.target.value
    })

    
  }

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    
    dispatch(addTask({
      ...task,
      id:uuid(),
    }))

   
    form.current.reset()

  }

  



  return (
    <ContainerInputBtnStyled ref={form} onSubmit={handleSubmit}>
      <InputStyled 
        type='text' 
        name='tasks' 
        placeholder='Escribe una tarea' 
        required 
        onChange={handleChange} 
        autoComplete='off'/>
      <BtnSubmitForm type='submit' >+</BtnSubmitForm>


    </ContainerInputBtnStyled>
    
  )
}

export default InputBtnFormData
