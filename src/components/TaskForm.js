import React, { Component } from 'react';

export default class TaskForm extends Component {
  onSubmit = (e) => {
    //console.log(this.state);
    this.props.addtask(this.state.title, this.state.description);
    e.preventDefault();
  };

  cambio = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  state = {
    title: '',
    description: '',
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="title"
          type="text"
          placeholder="escribe la tarea"
          onChange={this.cambio}
        ></input>
        <br />
        <br />
        <textarea
          name="description"
          placeholder="descripción de la tarea"
          onChange={this.cambio}
        ></textarea>
        <br />
        <button type="submit">Almacenar</button>
      </form>
    );
  }
}
