import React from 'react';
import { StatusBadge, StatusText } from '../../styles';

interface StatusBadgeProps {
  status: 'pending' | 'confirmed' | 'cancelled';
}

const StatusBadgeComponent: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <StatusBadge status={status}>
      <StatusText status={status}>
        {status === 'confirmed' ? 'Confirmada' : status === 'cancelled' ? 'Cancelada' : 'Pendente'}
      </StatusText>
    </StatusBadge>
  );
};

export default StatusBadgeComponent;