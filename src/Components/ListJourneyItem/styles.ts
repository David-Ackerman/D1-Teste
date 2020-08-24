import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 45px;
  margin-top: 11px;
  background-color: var(--true-white);
  padding-left: 10px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  border-radius: 4px;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 8fr 3fr 1fr 3fr 2fr 4fr;
  grid-template-areas: "name destiny . success . status";

  >strong {
    grid-area: name;
    font-size: 14px;
  }
  > span{
    font-size: 14px;
    font-family: 'Gotham-Book';
  }
  .destiny{
    grid-area: destiny;
    justify-self: center;
  }
  .success{
    grid-area: success;
    justify-self: center;
  }
`;

export const Status = styled.div`
  grid-area: status;
  display: flex;
  align-items: center;
  > span{
    font-family: 'Gotham-Book';
    font-size: 14px;
  }
`;



