import React from 'react';
import { ListItem } from 'react-native-elements';
import { Appointment } from '../../types/appointments';
import { AppointmentCard } from '../../styles';

interface AppointmentCardProps {
  appointment: Appointment;
}

const AppointmentCardComponent: React.FC<AppointmentCardProps> = ({ appointment }) => {
  return (
    <AppointmentCard>
      <ListItem.Content>
        <ListItem.Title>{`Paciente: ${appointment.patientName}`}</ListItem.Title>
        <ListItem.Subtitle>{`${appointment.date} às ${appointment.time}`}</ListItem.Subtitle>
        <ListItem.Subtitle>{`Médico: ${appointment.doctorName}`}</ListItem.Subtitle>
        <ListItem.Subtitle>{`Especialidade: ${appointment.specialty}`}</ListItem.Subtitle>
        <StatusBadgeComponent status={appointment.status} />
      </ListItem.Content>
    </AppointmentCard>
  );
};

export default AppointmentCardComponent;