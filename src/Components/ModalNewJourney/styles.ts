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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  
`;

export const ModalBox = styled.section`
  background-color: var(--true-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 15;
  width: 450px;
  padding: 25px 30px;
  border-radius: 7px;
  box-shadow: 1px 1px 10px #1A173134;
  position:fixed;

  top:30%;
  left:50%;
  transform: translate(-50%,-50%);
  
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  > span {
    font-family: 'Gotham-Book';
    font-size: 13px;
    margin-top: 25px;
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
  margin-top: 15px;
  width: 100%;
  height: 2px;
  background-color: var(--icons-white);
`;

export const StyledInput = styled.input`
  margin-top: 5px;
  margin-bottom: 2px;
  width: 100%;
  height: 35px;
  background-color: var(--true-white);
  border: 1px solid #CCCFDE;
  border-radius: 5px;
  padding: 0  10px;
  font-family: 'Gotham-book';
  font-size: 16px;
`;

export const BotSide = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
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

