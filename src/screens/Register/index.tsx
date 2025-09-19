import React from 'react';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements'; // Adicionado
import { useRegister } from './hooks/useRegister';
import UserTypeSelector from './components/UserTypeSelector';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { Container, Title, SectionTitle, ErrorText, input, button, buttonStyle, backButton, backButtonStyle } from './styles';

type RegisterScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Register'>;
};

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const { name, email, password, userType, loading, error, setName, setEmail, setPassword, setUserType, handleRegister } = useRegister(navigation);

  return (
    <Container>
      <Title>Cadastro de Usuário</Title>
      
      <Input
        placeholder="Nome completo"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        containerStyle={input}
      />

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        containerStyle={input}
      />

      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        containerStyle={input}
      />

      <SectionTitle>Tipo de Usuário</SectionTitle>
      <UserTypeSelector userType={userType} setUserType={setUserType} />

      {error ? <ErrorText>{error}</ErrorText> : null}

      <Button
        title="Cadastrar"
        onPress={handleRegister}
        loading={loading}
        containerStyle={button}
        buttonStyle={buttonStyle}
      />

      <Button
        title="Voltar para Login"
        onPress={() => navigation.navigate('Login')}
        containerStyle={backButton}
        buttonStyle={backButtonStyle}
      />
    </Container>
  );
};

export default RegisterScreen;