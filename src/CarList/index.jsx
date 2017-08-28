import React from 'react';

const CarList = ({cars}) => (
  <ol>
    {cars.map(car => <li key={car}>{car}</li>)}
  </ol>
);

export default CarList;
