import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const Title = styled.h1`
  font-family: 'Gilroy', 'Inter', sans-serif;
  font-weight: 400;
  font-size: 56px;
  line-height: 1.16;
  margin-bottom: 1.5rem;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  border-radius: var(--border-radius-md);
  padding: 8px 12px 8px 8px;
  box-shadow: var(--shadow-card);
  margin-bottom: 2rem;
`;

const ToggleOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-sm);
  padding: 8px 16px;
  font-weight: ${props => props.active ? '500' : '400'};
  font-size: 16px;
  line-height: 1.16;
  cursor: pointer;
  background-color: ${props => props.active ? 'var(--color-white)' : 'transparent'};
  color: ${props => props.active ? 'var(--color-dark)' : 'var(--color-dark)'};
  box-shadow: ${props => props.active ? 'var(--shadow-card)' : 'none'};
`;

const MonthlyOption = styled(ToggleOption)`
  background-color: transparent;
`;

const AnnualOption = styled(ToggleOption)`
  background-color: ${props => props.active ? 'var(--color-dark)' : 'transparent'};
  color: ${props => props.active ? 'var(--color-white)' : 'var(--color-dark)'};
`;

const PricingHeader = ({ billingCycle, setBillingCycle }) => {
  const handleToggle = (cycle) => {
    setBillingCycle(cycle);
  };

  return (
    <Container>
      <Title>Pricing</Title>
      <ToggleContainer>
        <AnnualOption 
          active={billingCycle === 'annual'} 
          onClick={() => handleToggle('annual')}
        >
          Annual
        </AnnualOption>
        <MonthlyOption 
          active={billingCycle === 'monthly'} 
          onClick={() => handleToggle('monthly')}
        >
          Monthly
        </MonthlyOption>
      </ToggleContainer>
    </Container>
  );
};

export default PricingHeader;