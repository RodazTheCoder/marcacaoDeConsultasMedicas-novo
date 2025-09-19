import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/navigation';
import { useAuth } from '../../../contexts/AuthContext';

type RegisterData = {
  name: string;
  email: string;
  password: string;
  userType: 'PACIENTE' | 'ADMIN';
};

type UseRegisterReturn = {
  name: string;
  email: string;
  password: string;
  userType: 'PACIENTE' | 'ADMIN';
  loading: boolean;
  error: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setUserType: (value: 'PACIENTE' | 'ADMIN') => void;
  handleRegister: () => Promise<void>;
};

export function useRegister(navigation: NativeStackNavigationProp<RootStackParamList, 'Register'>): UseRegisterReturn {
  const { register } = useAuth();
  const localNavigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Register'>>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'PACIENTE' | 'ADMIN'>('PACIENTE');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      setLoading(true);
      setError('');

      if (!name || !email || !password) {
        setError('Por favor, preencha todos os campos');
        return;
      }

      await register({
        name,
        email,
        password,
        userType,
      });

      localNavigation.navigate('Login');
    } catch (err) {
      setError('Erro ao criar conta. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return {
    name,
    email,
    password,
    userType,
    loading,
    error,
    setName,
    setEmail,
    setPassword,
    setUserType,
    handleRegister,
  };
}