import React from 'react';
import { Button } from 'react-native-elements';
import { Appointment, getStatusText } from '../../utils/statusHelpers';
import { AppointmentCard as StyledAppointmentCard, ListItemContent, DoctorName, Specialty, DateTime, StatusBadge, StatusText, ButtonContainer } from './styles';
import { useAdminDashboard } from '../../hooks/useAdminDashboard';

interface AppointmentCardProps {
  appointment: Appointment;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  const { handleUpdateStatus } = useAdminDashboard();

  return (
    <StyledAppointmentCard>
      <ListItemContent>
        <DoctorName>{appointment.doctorName}</DoctorName>
        <Specialty>{appointment.specialty}</Specialty>
        <DateTime>{appointment.date} às {appointment.time}</DateTime>
        <StatusBadge status={appointment.status}>
          <StatusText status={appointment.status}>{getStatusText(appointment.status)}</StatusText>
        </StatusBadge> {/* Corrigido para </StatusBadge> */}
        {appointment.status === 'pending' && (
          <ButtonContainer>
            <Button
              title="Confirmar"
              onPress={() => handleUpdateStatus(appointment.id, 'confirmed')}
              containerStyle={{ marginTop: 8, width: '48%' }}
              buttonStyle={{ backgroundColor: '#28a745', paddingVertical: 8 }}
            />
            <Button
              title="Cancelar"
              onPress={() => handleUpdateStatus(appointment.id, 'cancelled')}
              containerStyle={{ marginTop: 8, width: '48%' }}
              buttonStyle={{ backgroundColor: '#dc3545', paddingVertical: 8 }}
            />
          </ButtonContainer>
        )}
      </ListItemContent>
    </StyledAppointmentCard>
  );
};

export default AppointmentCard;