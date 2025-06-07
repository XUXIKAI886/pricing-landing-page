import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3.5rem;
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Glitten', 'Inter', sans-serif;
  font-size: 40px;
  line-height: 1.25;
  font-weight: 400;
`;

const LogoIcon = styled.div`
  margin-right: 8px;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  border-radius: var(--border-radius-md);
  padding: 20px 24px;
  gap: 40px;
  box-shadow: var(--shadow-card);
`;

const MenuItem = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.17;
  cursor: pointer;
`;

const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: 20px 24px;
  gap: 8px;
  box-shadow: var(--shadow-card);
  cursor: pointer;
`;

const SettingsText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.17;
`;

const NotificationIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  background-color: var(--color-white);
  border-radius: 48px;
  cursor: pointer;
  box-shadow: var(--shadow-card);
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <LogoIcon>
          <svg width="39" height="52" viewBox="0 0 39 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.37 0H0V38.31H30.37V0Z" fill="black"/>
            <path d="M39 0H31.88V16.5H39V0Z" fill="black"/>
            <path d="M39 35.49H31.88V52H39V35.49Z" fill="black"/>
            <path d="M30.37 13.69H0V52H30.37V13.69Z" fill="black"/>
          </svg>
        </LogoIcon>
        CREX10
      </Logo>
      <Navigation>
        <MenuItems>
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>People</MenuItem>
          <MenuItem>Hiring</MenuItem>
          <MenuItem>Devices</MenuItem>
          <MenuItem>Salary</MenuItem>
          <MenuItem>Apps</MenuItem>
          <MenuItem>Calender</MenuItem>
          <MenuItem>Reviews</MenuItem>
        </MenuItems>
        <SettingsContainer>
          <img src="/images/settings-icon.svg" alt="设置" width="24" height="24" />
          <SettingsText>Settings</SettingsText>
        </SettingsContainer>
        <NotificationIcon>
          <img src="/images/notification-icon.svg" alt="通知" width="16" height="18" />
        </NotificationIcon>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;