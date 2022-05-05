import React from 'react';
import ValidEmail from './component/ ValidEmail';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      saveEmail: '',
    }
  }

  // changeEmail({target: {value}}) {
  //   this.setState({ email: value });
  // }

  // changeSaveEmail(value) {
  //   this.setState({ saveEmail: value, email: '' });
  // }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">

          <label htmlFor="id-email">
            Email
            <input
            id="id-email"
            value={ email }
            name="email"
            type="email"
            onChange={({target: {value}}) => this.setState({ email: value})}
            />
          </label>

          <input
          id='btn-send'
          data-testid="id-send"
          type= 'button'
          value='Enviar'
          onClick={() => this.setState({ saveEmail: this.state.email, email: ''})}
          />

          <input
          id='btn-back'
          type='button' 
          value='Voltar' />

          {/* <h2 data-testid="id-email-user">{`Valor: ${saveEmail}`}</h2>  */}
          
          <ValidEmail email={ saveEmail} />
      </div>
    );
  }
}

export default App;
