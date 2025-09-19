import styled from 'styled-components/native';
import { ViewStyle, TextStyle } from 'react-native';
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

export const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 15px;
  margin-top: 10px;
`;

export const LoadingText = styled.Text`
  text-align: center;
  color: ${theme.colors.text};
  font-size: 16px;
  margin-top: 20px;
`;

export const styles = {
  scrollContent: {
    padding: 20,
  } as ViewStyle,
  button: {
    marginBottom: 20,
    width: '100%',
  } as ViewStyle,
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
  } as ViewStyle,
  logoutButton: {
    backgroundColor: theme.colors.error,
    paddingVertical: 12,
  } as ViewStyle,
  actionButton: {
    marginTop: 8,
    width: '48%',
  } as ViewStyle,
  confirmButton: {
    backgroundColor: '#28a745',
    paddingVertical: 8,
  } as ViewStyle,
  cancelButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 8,
  } as ViewStyle,
  doctorName: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
  } as TextStyle,
  specialty: {
    fontSize: 14,
    color: theme.colors.text,
    marginTop: 4,
  } as TextStyle,
  dateTime: {
    fontSize: 14,
    color: theme.colors.text,
    marginTop: 4,
  } as TextStyle,
};