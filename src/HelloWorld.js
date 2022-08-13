import React from 'react';
import './style.css';
/*
export default function HelloWorld(props) {
  console.log(props.objetivo);
  return (
    <div>
      <h1>
        Hello World!!! {props.mytext} Objetivo: {props.objetivo}
      </h1>
    </div>
  );
}
*/
class HelloWorld extends React.Component {
  state = {
    mostrar: true,
  };

  render() {
    if (this.state.mostrar) {
      return (
        <div className="shopping-list">
          <h1>Shopping List for : {this.props.myname}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
          <button onClick={() => this.setState({ mostrar: false })}>
            ocultar
          </button>
        </div>
      );
    } else {
      return (
        <div>
          no hay datos
          <button onClick={() => this.setState({ mostrar: true })}>
            mostrar
          </button>
        </div>
      );
    }
  }
}

export default HelloWorld;
