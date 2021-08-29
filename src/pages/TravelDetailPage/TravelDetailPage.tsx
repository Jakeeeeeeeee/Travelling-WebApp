import React from 'react';
import { RouteComponentProps } from 'react-router';

interface MatchParams {
  travelRouteID: string;
}

export const TravelDetailPage : React.FC<RouteComponentProps<MatchParams>> = (props) => {
  return (
    <h1>Travel Detail, ID: {props.match.params.travelRouteID}</h1>
  );
}