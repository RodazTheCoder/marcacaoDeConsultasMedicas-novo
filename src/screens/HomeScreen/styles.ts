import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  padding: ${theme.spacing.medium}px;
`;

export const AppointmentList = styled(FlatList)`
  flex: 1;
`;

export const AppointmentCard = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  padding: ${theme.spacing.medium}px;
  margin-bottom: ${theme.spacing.medium}px;
  flex-direction: row;
  align-items: center;
  elevation: 2;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  shadow-offset: 0px 2px;
`;

export const DoctorImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: ${theme.spacing.medium}px;
`;

export const InfoContainer = styled.View`
  flex: 1;
`;

export const DoctorName = styled.Text`
  font-size: ${theme.typography.subtitle.fontSize}px;
  font-weight: ${theme.typography.subtitle.fontWeight};
  color: ${theme.colors.text};
`;

export const DoctorSpecialty = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text};
  opacity: 0.8;
  margin-bottom: 4px;
`;

export const DateTime = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.primary};
  margin-top: 4px;
`;

export const Description = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text};
  opacity: 0.8;
  margin-top: 4px;
`;

export const Status = styled.Text<{ status: string }>`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${(props) =>
    props.status === 'pending' ? theme.colors.error : theme.colors.success};
  margin-top: 4px;
  font-weight: bold;
`;

export const ActionButtons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: ${theme.spacing.small}px;
`;

export const ActionButton = styled(TouchableOpacity)`
  padding: ${theme.spacing.small}px;
  margin-left: ${theme.spacing.small}px;
`;

export const EmptyText = styled.Text`
  text-align: center;
  color: ${theme.colors.text};
  opacity: 0.6;
  margin-top: ${theme.spacing.large}px;
`;

// Estilos do AppointmentCard original (adaptados para consolidação)
export const CardContent = styled.View`
  padding: 10px;
`;

export const DoctorInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const TextContainer = styled.View`
  margin-left: 15px;
`;

export const Specialty = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  opacity: 0.7;
`;

export const AppointmentInfo = styled.View`
  margin-bottom: 15px;
`;

export const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const InfoLabel = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  opacity: 0.7;
`;

export const InfoValue = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  font-weight: 500;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const StatusDot = styled.View<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${props => props.color};
  margin-right: 8px;
`;

export const StatusText = styled.Text<{ color: string }>`
  font-size: 14px;
  color: ${props => props.color};
  font-weight: 500;
`;