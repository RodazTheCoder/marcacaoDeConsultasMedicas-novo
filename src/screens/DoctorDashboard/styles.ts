import styled from 'styled-components/native';
import { ListItem } from 'react-native-elements';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 20px;
  text-align: center;
`;

export const AppointmentCard = styled(ListItem)`
  background-color: ${theme.colors.background};
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 15px;
  border-width: 1px;
  border-color: ${theme.colors.border};
`;

export const LoadingText = styled.Text`
  text-align: center;
  color: ${theme.colors.text};
  font-size: 16px;
  margin-top: 20px;
`;

export const EmptyText = styled.Text`
  text-align: center;
  color: ${theme.colors.text};
  font-size: 16px;
  margin-top: 20px;
`;

export const StatusBadge = styled.View<{ status: string }>`
  background-color: ${(props) => getStatusColor(props.status) + '20'};
  padding: 4px 8px;
  border-radius: 4px;
  align-self: flex-start;
  margin-top: 8px;
`;

export const StatusText = styled.Text<{ status: string }>`
  color: ${(props) => getStatusColor(props.status)};
  font-size: 12px;
  font-weight: 500;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

// Função auxiliar movida para styles.ts
export const getStatusColor = (status: string) => {
  switch (status) {
    case 'confirmed':
      return theme.colors.success;
    case 'cancelled':
      return theme.colors.error;
    default:
      return theme.colors.warning;
  }
};

// Estilos inline movidos
export const scrollContent = {
  padding: 20,
};

export const button = {
  marginBottom: 20,
  width: '100%',
};

export const buttonStyle = {
  backgroundColor: theme.colors.primary,
  paddingVertical: 12,
};

export const logoutButton = {
  backgroundColor: theme.colors.error,
  paddingVertical: 12,
};

export const actionButton = {
  marginTop: 8,
  width: '48%',
};

export const confirmButton = {
  backgroundColor: theme.colors.success,
  paddingVertical: 8,
};

export const cancelButton = {
  backgroundColor: theme.colors.error,
  paddingVertical: 8,
};

export const dateTime = {
  fontSize: 16,
  fontWeight: '700',
  color: theme.colors.text,
};

export const patientName = {
  fontSize: 16,
  fontWeight: '700',
  color: theme.colors.text,
};

export const specialty = {
  fontSize: 14,
  fontWeight: '500',
  color: theme.colors.text,
};
