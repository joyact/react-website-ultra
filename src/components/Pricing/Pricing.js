import React from 'react';
import {
  PricingSection,
  PricingWrapper,
  Title,
  Container,
  PricingColumn,
  PricingInfo,
} from './Pricing.elements';

function Pricing() {
  return (
    <PricingSection>
      <PricingWrapper>
        <Title>Our Services</Title>
        <Container>
          <PricingColumn to="/">
            <PricingInfo>1st Pack</PricingInfo>
          </PricingColumn>
          <PricingColumn to="/">
            <PricingInfo>2nd Pack</PricingInfo>
          </PricingColumn>
          <PricingColumn to="/">
            <PricingInfo>3rd Pack</PricingInfo>
          </PricingColumn>
        </Container>
      </PricingWrapper>
    </PricingSection>
  );
}

export default Pricing;
