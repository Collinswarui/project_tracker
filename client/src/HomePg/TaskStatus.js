import React from 'react'

export const TaskStatus = ({tasks= []}) => {
  return (
    <div className='home'>
      <h3>Task Status</h3>
      <ul>
        {tasks.map((task) => (
            <li key={task.id}>
                <strong>{task.name}</strong>
                <p>Daedline: {task.deadline}</p>
                <p>Status: {task.status}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}

