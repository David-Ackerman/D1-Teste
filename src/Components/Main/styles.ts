import styled, { css } from 'styled-components';
import { TableIcon, SendIcon, PlayIcon, PenIcon, BedIcon, CheckIcon } from  '../../styles/Icons';

export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;


export const Filters = styled.div`
  margin-left: 1px;
  margin-right: 10px;
  width: 15vw;
  > strong {
    color: var(--color-text);
    font-size: 16px;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > ul{
    margin-top: 35px;
    width: 100%;
  }
  position: sticky;
  left: 0;
  top: 140px;
`;

export const FilterItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 12px;
  .active {
    > span{
      font-family: 'Gotham-Bold';
      font-size: 16px;
      color: var(--blue);
    }
    > strong{
      background-color: var(--blue);
      color: var(--true-white);
    }
  }
  .notActive{
    :hover{
      > span{
        color: var(--blue);
      }
      > strong{
        background-color: var(--quantity-box-lighter);
      }
    }
  }
`;

export const JorneyItemText = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  > span{
    font-family: 'Gotham-Book';
    font-size: 16px;
    color: var(--text-color);
  }
`;

export const Quantity = styled.strong`
  width: 22px;
  height: 22px;
  background-color: var(--quantity-box);
  color: var(--color-text-lighter);
  border-radius: 50%;
  display: flex;
  font-size: 11px;
  align-items: center;
  justify-content: center;
  padding-right: 1px;
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  > span{
    font-size: 80px;
    font-family: 'Gotham-Book';
  }
`;

export const ListDiv = styled.div`
  margin-top: 55px;
  width: 800px;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Legend = styled.ul`
  display: grid;
  grid-template-columns: 8fr 3fr 1fr 3fr 2fr 4fr;
  grid-template-areas: "name destiny . success . status";
  padding-left: 10px;
  padding-right: 15px;
  > li {
    color: var(--color-text-lighter);
    font-family: 'Gotham-Book';
    font-size: 14px;
    font-weight: 400;
  }
  .name{
    grid-area: name;
  }
  .destiny{
    grid-area: destiny;
    justify-self: center;
  }
  .success{
    grid-area: success;
    justify-self: center;
  }
  .status{
    grid-area: status;
  }
`;

const IconCSS = css`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  flex-shrink: 0;
`;

export const StyledTableIcon = styled(TableIcon)`
  ${IconCSS}
  fill: var(--table-icon);
`;
export const StyledSendIcon = styled(SendIcon)`
  ${IconCSS}
  fill: var(--send-icon);
`;

export const StyledPlayIcon = styled(PlayIcon)`
  ${IconCSS}
  fill: var(--play-icon);
`;
export const StyledPenIcon = styled(PenIcon)`
  ${IconCSS}
  fill: var(--pen-icon);
`;

export const StyledBedIcon = styled(BedIcon)`
  ${IconCSS}
  fill: var(--bed-icon);
`;
export const StyledCheckIcon = styled(CheckIcon)`
  ${IconCSS}
  fill: var(--check-icon);
`;
