import React from 'react';
import styled from 'styled-components';
import PricingCard from './PricingCard';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  padding: 0 50px;
`;

// 基本版特性
const basicFeatures = [
  { text: 'Access to core HR features', active: true },
  { text: 'Employee record management', active: true },
  { text: 'Basic reporting tools', active: true },
  { text: 'Manage up to 10 team members', active: true },
  { text: 'Track employee attendance', active: false },
  { text: 'Assign and monitor tasks', active: false },
  { text: 'Email support', active: false },
  { text: 'Simple onboarding process', active: false },
  { text: 'Designed user-focused interfaces, optimized user', active: false },
];

// 专业版特性
const proFeatures = [
  { text: 'Access to core HR features', active: true },
  { text: 'Employee record management', active: true },
  { text: 'Basic reporting tools', active: true },
  { text: 'Manage up to 10 team members', active: true },
  { text: 'Track employee attendance', active: true },
  { text: 'Assign and monitor tasks', active: true },
  { text: 'Email support', active: false },
  { text: 'Simple onboarding process', active: false },
  { text: 'Designed user-focused interfaces, optimized user', active: false },
];

// 高级版特性
const premiumFeatures = [
  { text: 'Access to core HR features', active: true },
  { text: 'Employee record management', active: true },
  { text: 'Basic reporting tools', active: true },
  { text: 'Manage up to 10 team members', active: true },
  { text: 'Track employee attendance', active: true },
  { text: 'Assign and monitor tasks', active: true },
  { text: 'Email support', active: true },
  { text: 'Simple onboarding process', active: true },
  { text: 'Designed user-focused interfaces, optimized user', active: true },
];

const PricingSection = ({ billingCycle }) => {
  return (
    <Container>
      {/* 基本版 */}
      <PricingCard 
        title="Recruit Basic"
        price={billingCycle === 'annual' ? '17' : '26'}
        priceInfo={billingCycle === 'annual' ? `/ month (USD)\n&228 billed yearly` : `/ month (USD)`}
        description="Get started with essential tools to manage your team efficiently. Ideal for small teams with fundamental needs"
        features={basicFeatures}
        buttonText="Cancel"
        isActive={true}
        width="448px"
      />

      {/* 专业版 */}
      <PricingCard 
        title="Recruit Basic"
        price={billingCycle === 'annual' ? '19' : '26'}
        oldPrice={billingCycle === 'annual' ? '26' : null}
        priceInfo={billingCycle === 'annual' ? `/ month (USD)\n$228 billed yearly` : `/ month (USD)`}
        description="A Comprehensive solution for growing teams, offering enhanced features to streamline HR processes"
        features={proFeatures}
        buttonText="Start 7-days-Free-Trial"
        isSave={billingCycle === 'annual'}
        savePercentage={27}
        colored={true}
        width="448px"
      />

      {/* 高级版 */}
      <PricingCard 
        title="Recruit Basic"
        price={billingCycle === 'annual' ? '34' : '42'}
        priceInfo={billingCycle === 'annual' ? `/ month (USD)\n$408 billed yearly` : `/ month (USD)`}
        description="Maximize team performance with premium tools and full customization options, perfect for larger organizations"
        features={premiumFeatures}
        buttonText="Start 7-days-Free-Trial"
        isPopular={true}
        width="397px"
      />
    </Container>
  );
};

export default PricingSection;