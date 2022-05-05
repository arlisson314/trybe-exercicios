import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Tela de inserção de email', () => {

  it('Verificando se existe o campo Email.', () => {
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

  it('verifica se existem dois botões', () => {
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

  it('verifica se existe um botão de enviar', () => {
    render(<App />);
    const button = screen.getByTestId('id-send');
    expect(button).toBeInTheDocument();
    expect(button).toHaveProperty('type', 'button');
    expect(button).toHaveValue('Enviar');
  });

  it('Verificando se o botão e o campo de email estão funcionando corretamente.', () => {
    render(<App />);
    const EMAIL_USER = 'email@email.com';

    const textEmailREnder = screen.getByTestId('id-email-user');
    expect(textEmailREnder).toHaveTextContent(`Valor:`);
    expect(textEmailREnder).toBeInTheDocument();

    const button = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(button);

    expect(inputEmail).toHaveValue('');
    expect(textEmailREnder).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });
});