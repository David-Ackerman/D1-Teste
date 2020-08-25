import styled from 'styled-components';
import { BsPlayFill } from '../../styles/Icons';

export const  Container = styled.li`
  display: flex;
  align-items:  center;

  &:hover {
    > div{
      margin-left: 2px;
      opacity: 1;    
    }
    > svg{   
      fill: var(--blue);
    }
  }
  > svg {
    cursor: pointer;
    flex-shrink: 0;
  }
`;

export const TextBox = styled.div`
  margin-left: 12px;
  position: absolute;
  left: 2vw; 
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: var(--true-white);
  border-radius: 6px;
  box-shadow: 1px 1px 6px #00000029;
  opacity: 0;
  cursor: default;

  transition-property: margin opacity display;
  transition-duration: 0.35s;
  transition-timing-function: ease-in-out;
  
  > span {
    margin: 10px  14px 10px 4px;
    font-size: 12px;
    font-weight: bold;
    color: var(--color-text-box);
    flex-shrink: 0;
  }
`;

export const ArrowBuble = styled(BsPlayFill)`
  width: 14px;
  height: 14px;
  margin-left: -8px;

  transform: rotate(180deg);
  fill:var(--true-white);
`;