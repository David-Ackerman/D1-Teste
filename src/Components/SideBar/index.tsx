import React from 'react';

import {
  Detail,
  Container,
  Line,
  MidIcons,
  LowIcons,
  PieChartStyled,
  RocketStyled,
  PeopleStyled,
  CloudStyled,
  ArrowBoxStyled,
  Diamondstyled,
  ToolsStyled,
  ArrowsStyled,
  ExitStyled
} from './styles';

import logotipo from '../../assets/images/logotipo.png';
import AnimatedBox from '../AnimatedBox';

const SideBar: React.FC = () => {
  return (
    <Detail>
      <Container>
        <img src={logotipo} alt="D1 logo"/>
        <MidIcons>
          <AnimatedBox text="Análises">
            <PieChartStyled />
          </AnimatedBox>
          <AnimatedBox text="Jornadas">
            <RocketStyled />
          </AnimatedBox>
          <AnimatedBox text="Clientes">
            <PeopleStyled />
          </AnimatedBox>
          <AnimatedBox text="CCMcloud">
            <CloudStyled />
          </AnimatedBox>
          <Line />
          <AnimatedBox text="Versão1">
            <ArrowBoxStyled />
          </AnimatedBox>
        </MidIcons>
        <LowIcons>
          <AnimatedBox text="Administração">
            <Diamondstyled />
          </AnimatedBox>
          <AnimatedBox text="HelpDesk">
            <ToolsStyled />
          </AnimatedBox>
          <AnimatedBox text="TrocarConta">
            <ArrowsStyled />
          </AnimatedBox>
          <AnimatedBox text="Sair">
            <ExitStyled />
          </AnimatedBox>
        </LowIcons>             
      </Container>   
    </Detail>
  );
}

export default SideBar;