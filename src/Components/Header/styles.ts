import styled, {css} from 'styled-components';
import { PlusIcon, FaSearch, BsPlayFill } from '../../styles/Icons';

export const Container = styled.header`
  width: 100%;
  height: 90px;
  position: sticky;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;

  background-color: var(--background);
`;

export const LeftDiv = styled.div`
  width: 50%;
  height: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  .visible{
    opacity: 1;
  }
`;

export const User = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--blue);
  border-radius: 50%;
  cursor: default;

  > strong{
    color: var(--true-white);
    font: 'Gotham-Bold' 14px;
  }
  :hover{
    box-shadow: 1px 1px 6px #00000029;
  }
`;

export const BoxName = styled.div`
  padding: 5px;
  margin-left: 30px;
  position: absolute;
  z-index: 6;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--box-name);
  box-shadow: 1px 2px 6px #00000056;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 0.4s;

  > strong{
    margin: 6px 8px;
    font-size: 14px;
    color: var(--true-white);
  }
  > svg {
    fill: var(--box-name);
  }  
`;

export const AcmeLogoDiv = styled.div`
  width: 90px;
  height: 30px;
  margin-left: 35px;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 11px;
  
  background-color: var(--true-white);
  border: 1px solid #EBEEF6;
  border-radius: 5px;
  
  > img {
    width: 100%;
  }
`;

export const SearchDiv = styled.div`
  display: flex;
`;

export const InputContainer = styled.div`
  width: 300px;
  height: 35px;
  
  display: flex;
  align-items: center;
  padding-left: 10px;

  background-color: var(--true-white);
  border: 1px solid #CCCFDE;
  border-radius: 5px;
   
  :hover,
  :focus-within{
    box-shadow: 1px 1px 6px #00000029;
  }
  > svg {
    transform: rotate(90deg);
  }
`;

export const Input = styled.input`
  width: 100%;

  padding: 10px;

  font-family: 'gotham-book';
  font-size: 14px;
  color: var(--color-text);

  ::placeholder{
    color: var(--color-text-lighter);
  }
`;


export const Button = styled.button`
  width: 150px;
  height: 35px;
  margin-left: 15px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content:center;

  background-color: var(--blue);
  border-radius: 5px;
  cursor: pointer;

  .animation{
    width: 100%;
    height: 100%;
    position:absolute;
   
    background: transparent linear-gradient(90deg, #00E1FF,  var(--blue));
    opacity: 0;
    transition: opacity 0.5s;
    border-radius: 5px;
  }
  .text{
    position:absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    > svg{
      margin-right: 5px;    
    }
    > strong {
      color: var(--true-white);
      font-size: 13px;
    }
  }  
  :hover{
    .animation{
      opacity: 1;
    }
  }
`;

const IconCSS = css`
  width: 14px;
  height: 14px;
`;

export const PlusStyled = styled(PlusIcon)`
  ${IconCSS}
  fill: var(--true-white);
`;

export const SearchStyled = styled(FaSearch)`
  ${IconCSS}
  fill: var(--blue);
`;

export const ArrowBuble = styled(BsPlayFill)`
  ${IconCSS}
  margin-left: -13px;

  transform: rotate(180deg);
  
`;