import styled from 'styled-components/native';
import { ListItem } from 'react-native-elements';
import { AppointmentStatus, getStatusColor } from '../../utils/statusHelpers';
import theme from '../../../../styles/theme';

export const AppointmentCard = styled(ListItem)`
  background-color: ${theme.colors.background};
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 15px;
  border-width: 1px;
  border-color: ${theme.colors.border};
`;

export const ListItemContent = styled(ListItem.Content)``;

export const DoctorName = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.text};
`;

export const Specialty = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  margin-top: 4px;
`;

export const DateTime = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  margin-top: 4px;
`;

export const StatusBadge = styled.View<{ status: AppointmentStatus }>`
  background-color: ${(props) => getStatusColor(props.status) + '20'};
  padding: 4px 8px;
  border-radius: 4px;
  align-self: flex-start;
  margin-top: 8px;
`;

export const StatusText = styled.Text<{ status: AppointmentStatus }>`
  color: ${(props) => getStatusColor(props.status)};
  font-size: 12px;
  font-weight: 500;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;
