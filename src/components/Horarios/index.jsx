import { useState } from 'react';
import { Container } from './styles';

export function Horarios({ horario, onClick }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick && onClick();
  };

  return (
    <Container onClick={handleClick} style={{ backgroundColor: isActive ? 'red' : '' }}>
      {horario}
    </Container>
  );
}
