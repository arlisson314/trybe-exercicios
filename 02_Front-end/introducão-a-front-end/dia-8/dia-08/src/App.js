import React from 'react';
import Form from './components/Form';
import './components/Style.css'
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: "",
      inputIdade:"",
      inputEmail:"",
      butonDisable: true,
      checked: false,
    };

    this.onInputChang = this.onInputChang.bind(this);
    this.disable = this.disable.bind(this);
    this.buttonClick= this.buttonClick.bind(this);
  }

  onInputChang({ target }) {
    const { name, value } = target
    this.setState({
      [name]: value
    }, this.disable)
  }

  disable() {
    const { inputName, inputIdade, inputEmail } = this.state;

    const filds = [inputName, inputIdade].every((fild) => fild !== ''); 
    const emailRegex = /^[\w_-]+@[a-zA-Z]+\.com$/
    const isEmailvalid = emailRegex.test(inputEmail)

    if (isEmailvalid && filds) {
      this.setState({
        butonDisable: false
      })
    } else {
      this.setState({
        butonDisable: true
      })
    }
  }

  buttonClick(e) {
    e.preventDefault();
  }

  render() {
    const { inputName, inputIdade, butonDisable, inputEmail } = this.state;
    return (
      <div>
        <header className="header">
          <h1> Fomulario </h1>
        </header> 
        <section className="form">
          <Form
          inputName={ inputName }
          inputIdade={ inputIdade }
          inputEmail={ inputEmail }
          onInputChang={ this.onInputChang }
          buttonClick={this.buttonClick}
          butonDisable={ butonDisable }
          />
        </section>
      </div>
    )
  }
}

export default App;
