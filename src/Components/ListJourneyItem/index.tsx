import React from 'react';

import { Container, Grid, Status } from './styles';

export interface Journey {
  name: string;
  status: number;
  recipients: string;
  success: number;
  id: string;
}

interface JourneyProps {
  journey: Journey;
  filterName: string;
}

const ListJourneyItem: React.FC<JourneyProps> = ({journey, filterName, children}) => {
  return (
    <Container>
      <Grid>
        <strong>{journey.name}</strong>
        <span className="destiny">{journey.recipients}</span>
        <span className="success">{journey.success}</span>
        <Status>
          {children}
          <span>{filterName}</span>
        </Status>
      </Grid>
    </Container>
  );
}

export default ListJourneyItem;