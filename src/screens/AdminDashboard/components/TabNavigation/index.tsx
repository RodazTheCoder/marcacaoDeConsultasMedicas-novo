import React from 'react';
import { TabContainer, TabButton, TabText } from './styles';
import { useAdminDashboard } from '../../hooks/useAdminDashboard';

const TabNavigation: React.FC = () => {
  const { activeTab, setActiveTab } = useAdminDashboard();

  return (
    <TabContainer>
      <TabButton active={activeTab === 'appointments'} onPress={() => setActiveTab('appointments')}>
        <TabText active={activeTab === 'appointments'}>Consultas</TabText>
      </TabButton>
      <TabButton active={activeTab === 'users'} onPress={() => setActiveTab('users')}>
        <TabText active={activeTab === 'users'}>Usuários</TabText>
      </TabButton>
    </TabContainer>
  );
};

export default TabNavigation;