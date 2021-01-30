import React, { useState } from 'react'

import { Container, TaskCheckbox, TaskTitle } from './styles'

const Task: React.FC = () => {
  const [ isSelected, setIsSelected ] = useState(false)

  return (
    <Container>
        <TaskCheckbox
          disabled={false}
          value={isSelected}
          onValueChange={(newValue) => setIsSelected(newValue)}
          tintColors={{ true: "#c28ffb", false: "#e1e1e1" }}
        />
      <TaskTitle>Tasks</TaskTitle>
    </Container>
  )
}

export default Task
