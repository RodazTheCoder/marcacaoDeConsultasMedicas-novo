import React from 'react';
import { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { authApiService } from '../../services/authApi';
import { Appointment } from '../../types/appointments';
import { User } from '../../types/auth';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type UseHomeScreenReturn = {
  appointments: Appointment[];
  doctors: User[];
  refreshing: boolean;
  onRefresh: () => Promise<void>;
  getDoctorInfo: (doctorId: string) => User | undefined;
};

export function useHomeScreen(navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>): UseHomeScreenReturn {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [doctors, setDoctors] = useState<User[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  // Carrega consultas do AsyncStorage
  const loadAppointments = async () => {
    try {
      const storedAppointments = await AsyncStorage.getItem('appointments');
      if (storedAppointments) {
        setAppointments(JSON.parse(storedAppointments));
      }
    } catch (error) {
      console.error('Erro ao carregar consultas:', error);
    }
  };

  // Carrega médicos da API
  const loadDoctors = async () => {
    try {
      const doctorsData = await authApiService.getAllDoctors();
      setDoctors(doctorsData);
    } catch (error) {
      console.error('Erro ao carregar médicos:', error);
    }
  };

  // Atualiza dados quando a tela fica em foco
  useFocusEffect(
    useCallback(() => {
      loadAppointments();
      loadDoctors();
    }, [])
  );

  // Função de refresh manual
  const onRefresh = async () => {
    setRefreshing(true);
    await loadAppointments();
    await loadDoctors();
    setRefreshing(false);
  };

  // Busca dados do médico real
  const getDoctorInfo = (doctorId: string): User | undefined => {
    return doctors.find(doctor => doctor.id === doctorId);
  };

  return {
    appointments,
    doctors,
    refreshing,
    onRefresh,
    getDoctorInfo,
  };
}