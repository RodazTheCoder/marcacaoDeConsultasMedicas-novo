import React from 'react';
import { Avatar, Text } from 'react-native-elements';
import { User } from '../../../types/auth';
import { Container, CardContent, DoctorInfo, TextContainer, DoctorName, Specialty, AppointmentInfo, InfoRow, InfoLabel, InfoValue, StatusContainer, StatusDot, StatusText } from '../../styles';
import theme from '../../../../styles/theme';

interface AppointmentCardProps {
  doctor: User | undefined;
  date: string;
  time: string;
  description?: string;
  status: 'pending' | 'confirmed';
  onEdit?: () => void;
  onDelete?: () => void;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  doctor,
  date,
  time,
  description,
  status,
  onEdit,
  onDelete,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'confirmed':
        return theme.colors.success;
      case 'pending':
        return theme.colors.primary;
      default:
        return theme.colors.error;
    }
  };

  return (
    <Container>
      <CardContent>
        <DoctorInfo>
          <Avatar
            size="medium"
            rounded
            source={{ uri: doctor?.image || 'https://via.placeholder.com/100' }}
          />
          <TextContainer>
            <DoctorName>{doctor?.name || 'Médico não encontrado'}</DoctorName>
            <Specialty>
              {doctor?.role === 'doctor' && 'specialty' in doctor ? doctor.specialty : 'Especialidade não encontrada'}
            </Specialty>
          </TextContainer>
        </DoctorInfo>

        <AppointmentInfo>
          <InfoRow>
            <InfoLabel>Data:</InfoLabel>
            <InfoValue>{date}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Horário:</InfoLabel>
            <InfoValue>{time}</InfoValue>
          </InfoRow>
        </AppointmentInfo>

        {description && (
          <TextContainer>
            <InfoLabel>Descrição:</InfoLabel>
            <InfoValue>{description}</InfoValue>
          </TextContainer>
        )}

        <StatusContainer>
          <StatusDot color={getStatusColor()} />
          <StatusText color={getStatusColor()}>
            {status === 'confirmed' ? 'Confirmada' : status === 'pending' ? 'Pendente' : 'Cancelada'}
          </StatusText>
        </StatusContainer>
      </CardContent>
    </Container>
  );
};

export default AppointmentCard;
