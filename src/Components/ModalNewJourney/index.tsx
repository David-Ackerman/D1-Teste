import React from 'react';

import {
  Container,
  Visibility,
  ModalBox,
  TopSide,
  Title,
  LineWrapper,
  StyledInput,
  BotSide,
  StyledButton,
} from './styles';

interface ModalProps {
  handleClose: any;
  show: boolean;
}

const ModalNewJourney: React.FC<ModalProps> = ({handleClose, show}) => {
  const showHideClassName = show ? "display-flex" : "display-none";
  return (
    <Container >
      <Visibility className={showHideClassName}>
        <ModalBox >
          <TopSide>
            <Title>Nova Jornada</Title>
            <LineWrapper />
            <span>Dê um <strong>nome</strong> para essa Jornada</span>
            <StyledInput />
            <p>Você poderá alterar essa informação depois.</p>
          </TopSide>
          <BotSide>
            <StyledButton className="continue" onClick={handleClose} >Continuar</StyledButton>
            <StyledButton onClick={handleClose} >Cancelar</StyledButton>
          </BotSide>
        </ModalBox>
      </Visibility>
    </Container>
  );
}

export default ModalNewJourney;