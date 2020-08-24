import styled from 'styled-components';
import { PlusIcon, FaSearch, BsPlayFill } from '../../styles/Icons';

export const Container = styled.header`
  background-color: var(--background);
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 4px;
  padding-right: 2px;
  position: sticky;
  left: 0;
  top: 0;
  /* z-index: 5px; */
  
`;

export const LeftDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  
  .visible{
    opacity: 1;
  }
`;

export const User = styled.div`
  background-color: var(--blue);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  z-index: 6;
  background-color: var(--box-name);
  position: absolute;
  margin-left: 30px;
  display: flex;
  box-shadow: 1px 2px 6px #00000056;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s;
  padding: 5px;
  border-radius: 6px;
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
  position: absolute;
  margin-left: 35px;
  width: 90px;
  height: 30px;
  background-color: var(--true-white);
  border: 1px solid #EBEEF6;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 11px;
  > img {
    width: 100%;
  }
`;

export const SearchDiv = styled.div`
  display: flex;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--true-white);
  border: 1px solid #CCCFDE;
  border-radius: 5px;
  width: 300px;
  height: 35px;
  padding-left: 10px;
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
  background-color: var(--blue);
  border-radius: 5px;
  width: 150px;
  height: 35px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content:center;
  position: relative;
  cursor: pointer;

  .animation{
    background: transparent linear-gradient(90deg, #00E1FF,  var(--blue));
    opacity: 0;
    transition: opacity 0.5s;
    position:absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    
  }
  .text{
    /* z-index:5; */
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

export const PlusStyled = styled(PlusIcon)`
  width: 14px;
  height: 14px;
  fill: var(--true-white);
`;

export const SearchStyled = styled(FaSearch)`
  width: 14px;
  height: 14px;
  fill: var(--blue);
`;

export const ArrowBuble = styled(BsPlayFill)`
  width: 14px;
  height: 14px;
  transform: rotate(180deg);
  margin-left: -13px;
`;