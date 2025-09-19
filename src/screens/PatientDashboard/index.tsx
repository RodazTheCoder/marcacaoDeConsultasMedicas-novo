import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { usePatientDashboard } from './hooks/usePatientDashboard';
import AppointmentCardComponent from './components/AppointmentCard';
import { Container, Title, LoadingText, EmptyText } from './styles';
import Header from '../../components/Header';
import theme from '../../styles/theme';

type PatientDashboardScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'PatientDashboard'>;
};

const PatientDashboardScreen: React.FC<PatientDashboardScreenProps> = ({ navigation }) => {
  const { appointments, loading, signOut } = usePatientDashboard(navigation);
  const localNavigation = useNavigation<PatientDashboardScreenProps['navigation']>();

  return (
    <Container>
      <Header />
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Title>Minhas Consultas</Title>

        <Button
          title="Agendar Nova Consulta"
          onPress={() => localNavigation.navigate('CreateAppointment')}
          containerStyle={{ marginBottom: 20, width: '100%' }}
          buttonStyle={{ backgroundColor: theme.colors.primary, paddingVertical: 12 }}
        />

        <Button
          title="Meu Perfil"
          onPress={() => localNavigation.navigate('Profile')}
          containerStyle={{ marginBottom: 20, width: '100%' }}
          buttonStyle={{ backgroundColor: theme.colors.primary, paddingVertical: 12 }}
        />

        {loading ? (
          <LoadingText>Carregando consultas...</LoadingText>
        ) : appointments.length === 0 ? (
          <EmptyText>Nenhuma consulta agendada</EmptyText>
        ) : (
          appointments.map((appointment) => (
            <AppointmentCardComponent key={appointment.id} appointment={appointment} />
          ))
        )}

        <Button
          title="Sair"
          onPress={signOut}
          containerStyle={{ marginBottom: 20, width: '100%' }}
          buttonStyle={{ backgroundColor: theme.colors.error, paddingVertical: 12 }}
        />
      </ScrollView>
    </Container>
  );
};

export default PatientDashboardScreen;