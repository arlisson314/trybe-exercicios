import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from  '../component/ ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Válido');
    // const isValid = screen.getByRole('heading', {level: 3, name: 'Email Válido'})
    expect(isValid).toBeInTheDocument();
  });