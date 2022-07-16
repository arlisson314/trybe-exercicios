import React from 'react';
import PropTypes from 'prop-types';
import './Style.css'
class Form extends React.Component{
  render() {
      const { inputName, onInputChang, inputIdade, butonDisable, buttonClick, inputEmail /*checked*/ } = this.props
    return (
        <form>
            <label htmlFor="inputName" >
              Digite seu nome
            <input
              className="input"
              placeholder=" nome"
              value={ inputName }
              onChange={ onInputChang }
              type="text"
              name="inputName"/>
            </label>

            <br />

            <label htmlFor="email">
              Digite seu E-mail
              <input
              className="input"
              placeholder=" Email"
              value={ inputEmail }
              onChange={ onInputChang }
              type="text"
              name="inputEmail"
              required
              />
            </label>

            <br />

            <label htmlFor="inputIdade">
              Qual sua Idade
            <input
              className="input"
              placeholder=' 0'
              value={inputIdade}
              onChange={ onInputChang }
              type="number"
              name = "inputIdade"
            />
            </label>

            <br />

            <label htmlFor="checked">
            Aceitar termos de uso:
            <input
            // checked={ checked }
            className="checkbox"
            disabled={ butonDisable }
            onChange={ onInputChang }
            type="checkbox"
            name="checked"
            />
            </label>
            
            <br />
          
            <button
            disabled={ butonDisable }
            onClick={ buttonClick }
            type="submit"
            >
              Eviar
            </button>
          
        </form>
    );
  }
};

Form.propTypes = {
    inputName: PropTypes.string.isRequired,
    inputIdade: PropTypes.string.isRequired,
    inputEmail: PropTypes.string.isRequired,
    onInputChang: PropTypes.func.isRequired,
    butonDisable: PropTypes.bool.isRequired,
    buttonClick: PropTypes.func.isRequired,
    // checked: PropTypes.bool.isRequired
};

export default Form;
