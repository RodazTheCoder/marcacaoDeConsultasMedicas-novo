import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/navigation';

export type Appointment = {
  id: string;
  patientId: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  specialty: string;
  status: 'pending' | 'confirmed' | 'cancelled';
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'doctor' | 'patient';
};

type UseAdminDashboardReturn = {
  appointments: Appointment[];
  users: User[];
  loading: boolean;
  activeTab: 'appointments' | 'users';
  setActiveTab: (tab: 'appointments' | 'users') => void;
  handleUpdateStatus: (appointmentId: string, newStatus: 'confirmed' | 'cancelled') => Promise<void>;
  signOut: () => void;
};

export const useAdminDashboard = (): UseAdminDashboardReturn => {
  const { user, signOut } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'AdminDashboard'>>();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'appointments' | 'users'>('appointments');

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const storedAppointments = await AsyncStorage.getItem('@MedicalApp:appointments');
      if (storedAppointments) {
        setAppointments(JSON.parse(storedAppointments));
      }
      const storedUsers = await AsyncStorage.getItem('@MedicalApp:users');
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [loadData])
  );

  const handleUpdateStatus = useCallback(async (appointmentId: string, newStatus: 'confirmed' | 'cancelled') => {
    try {
      const storedAppointments = await AsyncStorage.getItem('@MedicalApp:appointments');
      if (storedAppointments) {
        const allAppointments: Appointment[] = JSON.parse(storedAppointments);
        const updatedAppointments = allAppointments.map((appointment) =>
          appointment.id === appointmentId ? { ...appointment, status: newStatus } : appointment
        );
        await AsyncStorage.setItem('@MedicalApp:appointments', JSON.stringify(updatedAppointments));
        loadData();
      }
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
    }
  }, [loadData]);

  return {
    appointments,
    users,
    loading,
    activeTab,
    setActiveTab,
    handleUpdateStatus,
    signOut,
  };
};