import React from 'react';

import { TextBox, Container, ArrowBuble } from './styles';

interface Props{
  text: string
}

const AnimatedBox: React.FC<Props> = ({ text, children }) => {
  return (
    <Container>
      {children}
      <TextBox >
        <ArrowBuble />
        <span>{text}</span>
      </TextBox>
    </Container>
    
  );
}

export default AnimatedBox;