import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { useDoctorDashboard } from './hooks/useDoctorDashboard';
import AppointmentCardComponent from './components/AppointmentCard';
import { Container, Title, LoadingText, EmptyText, scrollContent, button, buttonStyle, logoutButton } from './styles';
import Header from '../../components/Header';
import theme from '../../styles/theme';

type DoctorDashboardScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'DoctorDashboard'>;
};

const DoctorDashboardScreen: React.FC<DoctorDashboardScreenProps> = ({ navigation }) => {
  const { appointments, loading, signOut } = useDoctorDashboard(navigation);
  const localNavigation = useNavigation<DoctorDashboardScreenProps['navigation']>();

  return (
    <Container>
      <Header />
      <ScrollView contentContainerStyle={scrollContent}>
        <Title>Minhas Consultas</Title>

        <Button
          title="Meu Perfil"
          onPress={() => localNavigation.navigate('Profile')}
          containerStyle={button}
          buttonStyle={buttonStyle}
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
          containerStyle={button}
          buttonStyle={logoutButton}
        />
      </ScrollView>
    </Container>
  );
};

export default DoctorDashboardScreen;
