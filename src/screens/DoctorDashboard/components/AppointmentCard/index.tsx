import React from 'react';
import { ListItem } from 'react-native-elements';
import { Appointment } from '../../types/appointments';
import { AppointmentCard, StatusBadge, StatusText, ButtonContainer } from '../../styles';
import { Button } from 'react-native-elements';
import { useDoctorDashboard } from '../../hooks/useDoctorDashboard';
import theme from '../../../../styles/theme';

interface AppointmentCardProps {
  appointment: Appointment;
}

const AppointmentCardComponent: React.FC<AppointmentCardProps> = ({ appointment }) => {
  const { handleUpdateStatus } = useDoctorDashboard();

  return (
    <AppointmentCard>
      <ListItem.Content>
        <ListItem.Title>{`Paciente: ${appointment.patientName || 'Nome não disponível'}`}</ListItem.Title>
        <ListItem.Subtitle>{`${appointment.date} às ${appointment.time}`}</ListItem.Subtitle>
        <ListItem.Subtitle>{appointment.specialty}</ListItem.Subtitle>
        <StatusBadge status={appointment.status}>
          <StatusText status={appointment.status}>
            {appointment.status === 'confirmed' ? 'Confirmada' : appointment.status === 'cancelled' ? 'Cancelada' : 'Pendente'}
          </StatusText>
        </StatusBadge>
        {appointment.status === 'pending' && (
          <ButtonContainer>
            <Button
              title="Confirmar"
              onPress={() => handleUpdateStatus(appointment.id, 'confirmed')}
              containerStyle={{ marginTop: 8, width: '48%' }}
              buttonStyle={{ backgroundColor: theme.colors.success, paddingVertical: 8 }}
            />
            <Button
              title="Cancelar"
              onPress={() => handleUpdateStatus(appointment.id, 'cancelled')}
              containerStyle={{ marginTop: 8, width: '48%' }}
              buttonStyle={{ backgroundColor: theme.colors.error, paddingVertical: 8 }}
            />
          </ButtonContainer>
        )}
      </ListItem.Content>
    </AppointmentCard>
  );
};

export default AppointmentCardComponent;
