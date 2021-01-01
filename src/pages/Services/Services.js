import React from 'react';
import { homeObjFour } from './Data';
import { InfoSection, Pricing } from '../../components';

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Services;
