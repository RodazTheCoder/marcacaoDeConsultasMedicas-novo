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

type UseDoctorDashboardReturn = {
  appointments: Appointment[];
  loading: boolean;
  signOut: () => void;
  user: { id: string; name: string; image?: string } | null;
  handleUpdateStatus: (appointmentId: string, newStatus: 'confirmed' | 'cancelled') => Promise<void>;
};

export function useDoctorDashboard(navigation: NativeStackNavigationProp<RootStackParamList, 'DoctorDashboard'>): UseDoctorDashboardReturn {
  const { user, signOut } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  const loadAppointments = async () => {
    try {
      const storedAppointments = await AsyncStorage.getItem('@MedicalApp:appointments');
      if (storedAppointments) {
        const allAppointments: Appointment[] = JSON.parse(storedAppointments);
        const doctorAppointments = allAppointments.filter(
          (appointment) => appointment.doctorId === user?.id
        );
        setAppointments(doctorAppointments);
      }
    } catch (error) {
      console.error('Erro ao carregar consultas:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (appointmentId: string, newStatus: 'confirmed' | 'cancelled') => {
    try {
      const storedAppointments = await AsyncStorage.getItem('@MedicalApp:appointments');
      if (storedAppointments) {
        const allAppointments: Appointment[] = JSON.parse(storedAppointments);
        const updatedAppointments = allAppointments.map((appointment) =>
          appointment.id === appointmentId ? { ...appointment, status: newStatus } : appointment
        );
        await AsyncStorage.setItem('@MedicalApp:appointments', JSON.stringify(updatedAppointments));
        loadAppointments(); // Recarrega a lista
      }
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
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
    handleUpdateStatus,
  };
}