import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toHaveProperty('type', 'email');
  expect(inputEmail).toBeInTheDocument();
});

// test('verifica se existe um botão', () => {
//   render(< App />);
//   const button = screen.getByRole('button');
//   expect(button).toHaveValue('Enviar');
//   expect(button).toBeInTheDocument();
// });

test('verifica se existem dois botões', () => {
  render(< App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);

  // expect(buttons[0]).toHaveValue('Enviar');
  // expect(buttons[0]).toHaveProperty('type', 'button');

  // expect(buttons[1]).toHaveValue('Voltar');
  // expect(buttons[1]).toHaveProperty('type', 'button');

  // expect(buttons[0]).toBeInTheDocument();
  // expect(buttons[1]).toBeInTheDocument()
});

test.only('verifica se existe um botão de enviar', () => {
  render(<App />);
  const button = screen.getByTestId('id-send');
  expect(button).toBeInTheDocument();
  expect(button).toHaveProperty('type', 'button');
  expect(button).toHaveValue('Enviar');
});