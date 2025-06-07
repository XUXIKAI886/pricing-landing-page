import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 38px;
  width: ${props => props.width || '448px'};
  position: relative;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: -24px;
  right: ${props => props.position || 'auto'};
  left: ${props => props.position === 'left' ? '0' : 'auto'};
`;

const TagText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.17;
`;

const SaveTagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: -24px;
  right: -24px;
`;

const SaveTagText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.17;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

const CardTitle = styled.h2`
  font-family: 'Gilroy', 'Inter', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.17;
  text-align: center;
  color: ${props => props.light ? 'var(--color-white)' : props.colored ? '#FAF9EE' : 'var(--color-dark)'};
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const OldPrice = styled.span`
  font-family: 'Gilroy', 'Inter', sans-serif;
  font-weight: 400;
  font-size: 64px;
  line-height: 1.16;
  text-decoration: line-through;
  color: #8E8E8E;
`;

const Price = styled.span`
  font-family: 'Gilroy', 'Inter', sans-serif;
  font-weight: 400;
  font-size: 64px;
  line-height: 1.16;
  color: ${props => props.colored ? 'var(--color-primary)' : 'var(--color-dark)'};
`;

const PriceInfo = styled.div`
  font-family: 'Gilroy', 'Inter', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.17;
  color: ${props => props.colored ? 'var(--color-primary)' : 'var(--color-grey)'};
  white-space: pre-line;
`;

const CardDescription = styled.p`
  font-family: 'Gilroy', 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.16;
  text-align: center;
  color: ${props => props.light ? 'var(--color-white)' : props.colored ? '#FAF9EE' : 'var(--color-dark)'};
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px dashed var(--color-grey-dark);
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
`;

const FeatureIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  border-radius: var(--border-radius-xs);
  background-color: ${props => props.active ? 'var(--color-green)' : 'transparent'};
`;

const FeatureText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.17;
  color: ${props => props.disabled ? 'var(--color-grey)' : props.colored ? 'var(--color-white)' : 'var(--color-dark)'};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 24px;
  background-color: var(--color-white);
  border: none;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-card);
  font-family: 'Gilroy', 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.16;
  cursor: pointer;
  color: var(--color-dark);

  &:hover {
    opacity: 0.9;
  }
`;

const PricingCard = ({ 
  title, 
  price,
  oldPrice,
  priceInfo,
  description,
  features,
  buttonText,
  isPopular,
  isActive,
  isSave,
  savePercentage,
  colored,
  width
}) => {
  return (
    <CardContainer width={width}>
      {isActive && (
        <TagContainer>
          <TagText>Active</TagText>
          <img src="/images/check-icon.svg" alt="活跃" width="6" height="6" />
        </TagContainer>
      )}
      {isPopular && (
        <TagContainer position="right">
          <TagText>Popular</TagText>
          <img src="/images/popular-icon.svg" alt="热门" width="6" height="6" />
        </TagContainer>
      )}
      {isSave && (
        <SaveTagContainer>
          <SaveTagText>Save {savePercentage}%</SaveTagText>
          <img src="/images/save-icon.svg" alt="节省" width="6" height="6" />
        </SaveTagContainer>
      )}
      
      <CardHeader>
        <CardTitle colored={colored}>{title}</CardTitle>
        <PriceContainer>
          {oldPrice && <OldPrice>${oldPrice}</OldPrice>}
          <Price colored={colored}>${price}</Price>
        </PriceContainer>
        <PriceInfo colored={colored}>{priceInfo}</PriceInfo>
        <CardDescription colored={colored}>{description}</CardDescription>
      </CardHeader>

      <Divider />

      <FeaturesList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureIcon active={feature.active}>
              {feature.active ? (
                <img src="/images/tick-icon.svg" alt="支持" width="11" height="9" />
              ) : (
                <img src="/images/cross-icon.svg" alt="不支持" width="12" height="12" />
              )}
            </FeatureIcon>
            <FeatureText disabled={!feature.active} colored={colored}>{feature.text}</FeatureText>
          </FeatureItem>
        ))}
      </FeaturesList>

      <Button>{buttonText}</Button>
    </CardContainer>
  );
};

export default PricingCard;