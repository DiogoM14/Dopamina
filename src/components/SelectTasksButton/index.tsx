import React, { useCallback, useState } from 'react';

import { Container, NavTitle, NavButton } from './styles';

interface ButtonTextProps {
  text: string;
}

const SelectTasksButton: React.FC<ButtonTextProps> = ({ text }) => {
  const [isFlaged, setIsFlaged] = useState(false)

  const handleButtonFlag = useCallback(() => {
    setIsFlaged(true)
  }, [])

  return (
    <Container>
      <NavButton onPress={handleButtonFlag}>
        <NavTitle style={{color: isFlaged ? '#c28ffb' : '#8d8d8d'}}>{text}</NavTitle>
      </NavButton>
    </Container>
  );
};

export default SelectTasksButton;
