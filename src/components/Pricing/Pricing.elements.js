import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PricingSection = styled.section`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const PricingColumn = styled(Link)`
  display: flex;
  width: 280px;
  height: 500px;
  background: #242424;
  border-radius: 4px;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  text-decoration: none;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const PricingInfo = styled.div`
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Icon = styled.div`
  margin-bottom: 24px;
`;

export const Plan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const Cost = styled.h4`
  font-size: 40px;
`;

export const Length = styled.p`
  font-size: 14px;
`;

export const Features = styled.ul`
  margin: 40px 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
  list-style: none;
`;

export const FeatureText = styled.li`
  margin-bottom: 10px;
`;
