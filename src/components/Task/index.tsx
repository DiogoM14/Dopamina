import React, { useState } from 'react'

import { Container, TaskCheckbox, TaskTitle } from './styles'

interface TaskProps {
  id: string
  taskName: string
}

const Task: React.FC<TaskProps> = ({ id, taskName }) => {
  const [ isSelected, setIsSelected ] = useState(false)
      console.log("CARD CONSOLE: " + taskName)

  return (
    <Container key={id} >
      <TaskCheckbox
        disabled={false}
        value={isSelected}
        onValueChange={(newValue) => setIsSelected(newValue)}
        tintColors={{ true: "#c28ffb", false: "#e1e1e1" }}
        
      />
      <TaskTitle style={{ textDecorationLine: isSelected ? 'line-through' : 'none', color: isSelected ? '#888' : '#e1e1e1' }}>{taskName}</TaskTitle>
    </Container>
  )
}

export default Task
