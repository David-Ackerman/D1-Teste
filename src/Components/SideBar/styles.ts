import styled, {css} from 'styled-components';
import {
  BsPeople,
  RiArrowLeftRightLine,
  BsCloudDownload,
  BsBoxArrowInUpRight,
  BiPieChart ,
  BiRocket,
  FaRegGem,
  BiPowerOff,
  RiToolsLine
} from '../../styles/Icons';

export const Detail = styled.div`
  width: 4.5vw;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: transparent linear-gradient(90deg, #00E1FF 0%, #117EFF 100%);
`;

export const Container = styled.nav`
  width: 100%;
  height: calc(100vh - 6px);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4.4vh 0;

  background-color: var(--side-bar);
  > img {
    width: calc(100% - 36px);
  }
`;

export const MidIcons = styled.ul`
  height: 27vh;
  margin-top: -220px;
  position: relative; 

  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LowIcons = styled.ul`
  height: 18vh;
  position: relative;

  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Line = styled.li`
  width: 100%;
  height: 2px;

  background: linear-gradient(90deg, #00E1FF 0%, #117EFF 100%);
`;

const CSSIcon = css`
  width: 20px;
  height: 21px;
  margin: 0;

  fill: var(--icons-white);
`;

export const PieChartStyled = styled(BiPieChart)`${CSSIcon}`;
export const RocketStyled = styled(BiRocket)`${CSSIcon}`;
export const PeopleStyled = styled(BsPeople)`${CSSIcon}`;
export const ArrowBoxStyled = styled(BsBoxArrowInUpRight)`${CSSIcon}`;
export const CloudStyled = styled(BsCloudDownload)`${CSSIcon}`;
export const Diamondstyled = styled(FaRegGem)`${CSSIcon}`;
export const ToolsStyled = styled(RiToolsLine)`${CSSIcon}`;
export const ArrowsStyled = styled(RiArrowLeftRightLine)`${CSSIcon}`;
export const ExitStyled = styled(BiPowerOff)`${CSSIcon}`;