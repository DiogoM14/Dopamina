import React, { useState } from 'react'

import { Container, TaskCheckbox, TaskTitle } from './styles'

interface TaskProps {
  taskName: string
}

const Task: React.FC<TaskProps> = ({ taskName }) => {
  const [ isSelected, setIsSelected ] = useState(false)

  return (
    <Container>
      <TaskCheckbox
        disabled={false}
        value={isSelected}
        onValueChange={(newValue) => setIsSelected(newValue)}
        tintColors={{ true: "#c28ffb", false: "#e1e1e1" }}
      />
      <TaskTitle>{taskName}</TaskTitle>
    </Container>
  )
}

export default Task
