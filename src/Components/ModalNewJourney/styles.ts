import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100%;
  z-index: 10;

  .display-flex {
    display: flex;
  }
  .display-none {
    display: none;
  }
`;
export const Visibility = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalBox = styled.section`
  width: 450px;
  position:fixed;
  top:30%;
  left:50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 30px;
  
  background-color: var(--true-white);
  border-radius: 7px;
  box-shadow: 1px 1px 10px #1A173134;
  transform: translate(-50%,-50%);
`;

export const TopSide = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  
  > span {
    margin-top: 25px;
    font-family: 'Gotham-Book';
    font-size: 13px; 
  }
  > p {
    color: var(--color-text-lighter);
    font-family: 'Gotham-Book';
    font-size: 13px;
  }
`;

export const Title = styled.strong`
  color: var(--color-text-lighter);
  font-size: 14px;
`;

export const LineWrapper = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 15px;
  
  background-color: var(--icons-white);
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 35px;
  margin-top: 5px;
  margin-bottom: 2px;

  padding: 0  10px;

  background-color: var(--true-white);
  border: 1px solid #CCCFDE;
  border-radius: 5px;
  font-family: 'Gotham-book';
  font-size: 16px;
`;

export const BotSide = styled.div`
  width: 40%;
  margin-top: 25px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .continue{
    color: var(--blue);
  }
`;

export const StyledButton = styled.button`
  border: none;
  background: none;
  font-family: 'Gotham-Bold';
  font-size: 14px;
  color: var(color-text);
  cursor: pointer;
`;

