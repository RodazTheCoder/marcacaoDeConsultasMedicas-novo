import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: ${theme.colors.text};
`;

export const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${theme.colors.text};
`;

export const UserTypeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const UserTypeButton = styled.TouchableOpacity<{ selected: boolean }>`
  flex: 1;
  padding: 12px;
  margin-right: 10px;
  align-items: center;
  border-radius: 8px;
  background-color: ${props => props.selected ? theme.colors.primary : theme.colors.surface};
`;

export const UserTypeText = styled.Text<{ selected: boolean }>`
  color: ${props => props.selected ? '#fff' : theme.colors.text};
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
  font-size: 14px;
`;

export const ErrorText = styled.Text`
  color: ${theme.colors.error};
  text-align: center;
  margin-bottom: 10px;
`;

// Estilos inline movidos
export const input = {
  marginBottom: 15,
};

export const button = {
  marginTop: 10,
  width: '100%',
};

export const buttonStyle = {
  backgroundColor: theme.colors.primary,
  paddingVertical: 12,
};

export const backButton = {
  marginTop: 10,
  width: '100%',
};

export const backButtonStyle = {
  backgroundColor: theme.colors.secondary,
  paddingVertical: 12,
};
