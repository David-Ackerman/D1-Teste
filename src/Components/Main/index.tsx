import React, { useEffect, useState } from 'react';
import api from '../../Services/api';
import ListJourneyItem, {Journey} from '../ListJourneyItem';

import {
  Container,
  MainContainer,
  Filters,
  FilterItemContainer,
  JorneyItemText,
  Quantity,
  ListDiv,
  Legend,
  StyledTableIcon,
  StyledSendIcon,
  StyledPlayIcon,
  StyledPenIcon,
  StyledBedIcon,
  StyledCheckIcon
} from './styles';


export interface Filter{
  id: number;
  name: string;
  quantity: number;
}

const Main: React.FC = () => {
  const initialFilterSelected = [true, false, false, false, false, false]

  const [journeys, setJourneys] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(initialFilterSelected);

  useEffect(() => {
    LoadFilters();
    LoadJourneys();
  }, []);

  function toogleSelectedFilter(id = 0){
    let states = [false, false, false, false, false, false]
    states[id] = true;
    setSelectedFilter(states);
    LoadJourneys(id);
  }

  async function LoadFilters() {      
    const response = await api.get('/filter');
    setFilters(response.data);
  }

  async function LoadJourneys(filter = 0) {
    let url = '';
    filter === 0 ? url = '/journey' : url = `/journey/${filter}` ;      
    const response = await api.get(url);
    setJourneys(response.data);   
  }

  function setIcon(id: Number) {
    switch(id){
      case 0:
        return <StyledTableIcon />
      case 1:
        return <StyledSendIcon />
      case 2:
        return <StyledPlayIcon />
      case 3:
        return <StyledPenIcon />
      case 4:
        return <StyledBedIcon />
      case 5:
        return <StyledCheckIcon />
    }
  } 

  return (
    <Container>
      <Filters>
        <strong>Jornadas</strong>
        <ul>
          {filters.map((filter: Filter) => {
            return (
              <FilterItemContainer key={filter.id} >
                {setIcon(filter.id)}
                <JorneyItemText
                  onClick={() => toogleSelectedFilter(filter.id)}
                  className={selectedFilter[filter.id] ? 'active' : 'notActive'}
                >
                  <span>{filter.name}</span>
                  <Quantity>{filter.quantity}</Quantity>
                </JorneyItemText>
              </FilterItemContainer>
            );
          })}
        </ul>
      </Filters>
      <MainContainer>
        <ListDiv>
          <Legend>
            <li className="name" >Nome</li>
            <li className="destiny" >Destinatários</li>
            <li className="success" >Sucesso</li>
            <li className="status" >Status</li>
          </Legend>
          {journeys.map((journey: Journey) => {
            const {name} = filters[journey.status];
            return (
              <ListJourneyItem
                key={journey.id}
                journey={journey}      
                filterName={name}
              >{setIcon(journey.status)}</ListJourneyItem>
            );
          })}
        </ListDiv>     
      </MainContainer>
    </Container>
  );
}

export default Main;