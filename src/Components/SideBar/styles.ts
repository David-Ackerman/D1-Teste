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
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: transparent linear-gradient(90deg, #00E1FF 0%, #117EFF 100%);
  width: 4.5vw;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
`;

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--side-bar);
  padding: 4.4vh 0;
  width: 100%;
  height: calc(100vh - 6px);
  > img {
    width: calc(100% - 36px);
  }
`;
export const MidIcons = styled.ul`
  height: 27vh;
  margin-top: -220px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative; 
`;
export const LowIcons = styled.ul`
  height: 18vh;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
`;

export const Line = styled.li`
  background: linear-gradient(90deg, #00E1FF 0%, #117EFF 100%) 0% 0% no-repeat padding-box;
  width: 22px;
  height: 2px; 
`;


const CSSIcon = css`
  margin: 0;
  width: 20px;
  height: 21px;
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