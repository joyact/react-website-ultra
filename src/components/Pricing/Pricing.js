import React from 'react';
import { Button } from '../../globalStyle';
import { GiRock, GiCrystalBars, GiCutDiamond } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  Title,
  Container,
  PricingColumn,
  PricingInfo,
  Icon,
  Plan,
  Cost,
  Length,
  Features,
  FeatureText,
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <Title>Our Services</Title>
          <Container>
            <PricingColumn to="/">
              <PricingInfo>
                <Icon>
                  <GiRock />
                </Icon>
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
                <Icon>
                  <GiCrystalBars />
                </Icon>
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
                <Icon>
                  <GiCutDiamond />
                </Icon>
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
    </IconContext.Provider>
  );
}

export default Pricing;
