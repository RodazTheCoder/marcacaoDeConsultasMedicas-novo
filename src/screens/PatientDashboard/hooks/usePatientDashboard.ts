import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../contexts/AuthContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/navigation';

type Appointment = {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  specialty: string;
  status: 'pending' | 'confirmed' | 'cancelled';
};

type UsePatientDashboardReturn = {
  appointments: Appointment[];
  loading: boolean;
  signOut: () => void;
  user: { id: string; name: string; image?: string } | null;
};

export function usePatientDashboard(navigation: NativeStackNavigationProp<RootStackParamList, 'PatientDashboard'>): UsePatientDashboardReturn {
  const { user, signOut } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  const loadAppointments = async () => {
    try {
      const storedAppointments = await AsyncStorage.getItem('@MedicalApp:appointments');
      if (storedAppointments) {
        const allAppointments: Appointment[] = JSON.parse(storedAppointments);
        const userAppointments = allAppointments.filter(
          (appointment) => appointment.patientId === user?.id
        );
        setAppointments(userAppointments);
      }
    } catch (error) {
      console.error('Erro ao carregar consultas:', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [user?.id])
  );

  return {
    appointments,
    loading,
    signOut,
    user,
  };
}