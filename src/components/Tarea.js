import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tarea extends Component {
  StyleCompled() {
    return {
      fontSize: '20px',
      color: this.props.data.estado ? 'gray' : 'black',
      textDecoration: this.props.data.estado ? 'line-through' : 'none',
    };
  }

  render() {
    return (
      <p style={this.StyleCompled()}>
        {this.props.data.title} - {this.props.data.descripcion} -
        {this.props.data.id}
        <input
          type="checkbox"
          onChange={this.props.checkDone.bind(this, this.props.data.id)}
        />
        <button onClick={this.props.deleteTask.bind(this, this.props.data.id)}>
          x
        </button>
      </p>
    );
  }
}

Tarea.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Tarea;
