import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Header from '../../components/Header';
import UserManagement from '../../components/UserManagement';
import { useAdminDashboard } from './hooks/useAdminDashboard';
import TabNavigation from './components/TabNavigation';
import AppointmentCard from './components/AppointmentCard';
import EmptyState from './components/EmptyState';
import { Container, Title, SectionTitle, LoadingText, styles } from './styles';
import theme from '../../styles/theme';

const AdminDashboardScreen: React.FC = () => {
  const { appointments, users, loading, activeTab, setActiveTab, handleUpdateStatus, signOut } = useAdminDashboard();

  return (
    <Container>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Title>Painel Administrativo</Title>
        <TabNavigation />
        {activeTab === 'appointments' ? (
          <>
            <SectionTitle>Últimas Consultas</SectionTitle>
            {loading ? (
              <LoadingText>Carregando dados...</LoadingText>
            ) : appointments.length === 0 ? (
              <EmptyState />
            ) : (
              appointments.map((appointment) => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))
            )}
          </>
        ) : (
          <UserManagement />
        )}
        <Button
          title="Sair"
          onPress={signOut}
          containerStyle={styles.button}
          buttonStyle={styles.logoutButton}
        />
      </ScrollView>
    </Container>
  );
};

export default AdminDashboardScreen;