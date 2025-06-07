import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import PricingHeader from './components/PricingHeader';
import PricingSection from './components/PricingSection';

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1728px;
  margin: 0 auto;
`;

function App() {
  const [billingCycle, setBillingCycle] = useState('annual');

  return (
    <AppContainer>
      <Header />
      <MainContent>
        <PricingHeader billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
        <PricingSection billingCycle={billingCycle} />
      </MainContent>
    </AppContainer>
  );
}

export default App;