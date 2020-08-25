import React, { useState } from 'react';

import {
  Container,
  LeftDiv,
  SearchDiv,
  User,
  AcmeLogoDiv,
  Input,
  Button,
  PlusStyled,
  InputContainer,
  SearchStyled,
  BoxName,
  ArrowBuble
} from './styles';

import Acme from '../../assets/images/acme-logo.png';
import ModalNewJourney from '../ModalNewJourney';

const Header: React.FC = () => {
  const [bubbleVisibility, setBubbleVisibility] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toogleModalVisibility = () => {
    setShowModal(!showModal);
  };

  function toogleBubbleVisibility(){
    setBubbleVisibility(!bubbleVisibility);
  }

  return (
    <Container>
      <LeftDiv>
        <User  onMouseEnter={toogleBubbleVisibility} onMouseLeave={toogleBubbleVisibility} >
          <strong>D</strong>
        </User>
        <BoxName className={bubbleVisibility ? 'visible' : ''} >
          <ArrowBuble />
          <strong>David dos Santos</strong>
        </BoxName>
        <AcmeLogoDiv>
          <img src={Acme} alt="Acme" />
        </AcmeLogoDiv>
      </LeftDiv>
      <ModalNewJourney show={showModal} handleClose={toogleModalVisibility} />
      <SearchDiv>
        <InputContainer>
          <SearchStyled />
          <Input placeholder="Buscar" type="text" />
        </InputContainer>
        
        <Button onClick={toogleModalVisibility} >
          <div className="animation" />
          <div className= "text">
            <PlusStyled />
            <strong>Nova Jornada</strong>
          </div>
        </Button>
      </SearchDiv>
    </Container>
  );
}

export default Header;