import React from 'react'

export default  function Task(props) {
  return (
    <div className='task'>
     <div className='taskname' style={{backgroundColor:props.completed?"green":"rgb(248, 246, 246)"}} >{props.taskName}</div>
     <button className='btn3' onClick={()=>props.completeTask(props.id)}>Complete</button>
         <button className='btn2' onClick={()=>props.delete(props.id)}  > Delete</button>
     </div>
  )
}
