import React from 'react';
import { ButtonContainer } from '../../styles';

interface ButtonContainerProps {
  children: React.ReactNode;
}

const ButtonContainerComponent: React.FC<ButtonContainerProps> = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default ButtonContainerComponent;