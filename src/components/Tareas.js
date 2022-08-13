import React, { Component } from 'react';
import Tarea from './Tarea';
import PropTypes from 'prop-types';

class Tareas extends Component {
  render() {
    return this.props.task.map((e) => (
      <Tarea
        data={e}
        key={e.id}
        deleteTask={this.props.deleteTask}
        checkDone={this.props.checkDone}
      />
    ));
  }
}

Tareas.propTypes = {
  task: PropTypes.array.isRequired,
};

export default Tareas;
