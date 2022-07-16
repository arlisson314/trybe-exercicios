
import React, {Component} from 'react'

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];
class Content extends Component {
    render() {
        return (
            conteudos.map((element) => {
               return <div key = {element.conteudo} className='card'>
                   <div className='sun'>O conteúdo é: {element.conteudo}</div>
                   <div className='sun'>Status: {element.bloco}</div>
                   <div className='sun'>Bloco: {element.status}</div>
                   <br/>
               </div>
            })
        )
    }
}
export default Content;