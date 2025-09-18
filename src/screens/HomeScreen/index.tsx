import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/navigation'; // Ajuste o caminho se necessário
import { useHomeScreen } from './hooks/useHomeScreen'; // Hook de lógica
import AppointmentCard from './components/AppointmentCard'; // Componente de consulta
import EmptyState from './components/EmptyState'; // Estado vazio
import { Container, Content, AppointmentList } from './styles'; // Estilos
import { HeaderContainer, HeaderTitle } from '../../../components/Header'; // Componente global
import theme from '../../../styles/theme';
import { Appointment } from '../../../types/appointments';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { appointments, refreshing, onRefresh, getDoctorInfo } = useHomeScreen(navigation);

  const renderAppointment = ({ item }: { item: Appointment }) => {
    const doctor = getDoctorInfo(item.doctorId);
    return (
      <AppointmentCard
        doctor={doctor}
        date={new Date(item.date).toLocaleDateString()}
        time={item.time}
        description={item.description}
        status={item.status}
      />
    );
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Minhas Consultas</HeaderTitle>
      </HeaderContainer>

      <Content>
        <Button
          title="Agendar Nova Consulta"
          icon={
            <FontAwesome
              name="calendar-plus-o"
              size={20}
              color="white"
              style={{ marginRight: 8 }}
            />
          }
          buttonStyle={{
            backgroundColor: theme.colors.primary,
            borderRadius: 8,
            padding: 12,
            marginBottom: theme.spacing.medium,
          }}
          onPress={() => navigation.navigate('CreateAppointment')}
        />

        <AppointmentList
          data={appointments}
          keyExtractor={(item: Appointment) => item.id}
          renderItem={renderAppointment}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={<EmptyState />}
        />
      </Content>
    </Container>
  );
};

export default HomeScreen;