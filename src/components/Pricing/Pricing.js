import React from 'react';
import { Button } from '../../globalStyle';
import {
  PricingSection,
  PricingWrapper,
  Title,
  Container,
  PricingColumn,
  PricingInfo,
  Plan,
  Cost,
  Length,
  Features,
  FeatureText,
} from './Pricing.elements';

function Pricing() {
  return (
    <PricingSection>
      <PricingWrapper>
        <Title>Our Services</Title>
        <Container>
          <PricingColumn to="/">
            <PricingInfo>
              <Plan>Starter Pack</Plan>
              <Cost>$99.99</Cost>
              <Length>per month</Length>
              <Features>
                <FeatureText>100 New Users</FeatureText>
                <FeatureText>$10,000 Budget</FeatureText>
                <FeatureText>Retargeting analytics</FeatureText>
              </Features>
              <Button primary>Choose Plan</Button>
            </PricingInfo>
          </PricingColumn>
          <PricingColumn to="/">
            <PricingInfo>
              <Plan>Gold Rush</Plan>
              <Cost>$299.99</Cost>
              <Length>per month</Length>
              <Features>
                <FeatureText>1000 New Users</FeatureText>
                <FeatureText>$50,000 Budget</FeatureText>
                <FeatureText>Lead Gen Analytics</FeatureText>
              </Features>
              <Button primary>Choose Plan</Button>
            </PricingInfo>
          </PricingColumn>
          <PricingColumn to="/">
            <PricingInfo>
              <Plan>Diamond Kings</Plan>
              <Cost>$999.99</Cost>
              <Length>per month</Length>
              <Features>
                <FeatureText>Unlimited Users</FeatureText>
                <FeatureText>Unlimited Budget</FeatureText>
                <FeatureText>24/7 Support</FeatureText>
              </Features>
              <Button primary>Choose Plan</Button>
            </PricingInfo>
          </PricingColumn>
        </Container>
      </PricingWrapper>
    </PricingSection>
  );
}

export default Pricing;
