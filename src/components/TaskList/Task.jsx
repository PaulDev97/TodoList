
import React from 'react'
import { BtnDeleteStyled, NotTaskStyled, SpanContentStyled, TaskStyled, TasksContainer } from './TaskListStyled' 
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../../toolkit/taskListSlice'


const Task = () => {

  const tasks = useSelector(state=> state.tasks)

  console.log(tasks)
  const dispatch = useDispatch()

  const deleteTasks = (id) => {

    dispatch(deleteTask(id))

  }


  return (

    <TasksContainer>

      {
        tasks.length === 0 
        ? <NotTaskStyled>
            <p>No hay tareas</p> <span>🤷‍♂️</span>
          </NotTaskStyled>
        : tasks.map(item =>(
          <TaskStyled key={item.id}>
            <SpanContentStyled>{item.tasks}</SpanContentStyled>
            <BtnDeleteStyled type='button' onClick={() => deleteTasks(item.id)}>❌</BtnDeleteStyled>
          </TaskStyled>
          ))
      }


    </TasksContainer>
           
      
   
  )
}

export default Task
