import React from 'react';
import './style.css';
import task from './task/task.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//importacion de componentes
import Tareas from './components/Tareas';
import TaskForm from './components/TaskForm';
import Post from './components/Post';

class App extends React.Component {
  state = {
    tareas: task,
  };

  addtask = (titulo, descripcion) => {
    const newTask = {
      title: titulo,
      descripcion: descripcion,
      id: this.state.tareas.length,
    };
    this.setState({
      tareas: [...this.state.tareas, newTask],
    });
  };

  deleteTask = (id) => {
    const newTask = this.state.tareas.filter((data) => data.id !== id);
    this.setState({
      tareas: newTask,
    });
    console.log(newTask);
  };

  checkDone = (id) => {
    const newTask = this.state.tareas.map((task) => {
      if (task.id === id) {
        task.estado = !task.estado;
      }
      return task;
    });
    this.setState({ tareas: newTask });
  };

  render() {
    return (
      <div>
        <TaskForm addtask={this.addtask} />
        <Tareas
          task={this.state.tareas}
          deleteTask={this.deleteTask}
          checkDone={this.checkDone}
        />

        <Post />
      </div>
    );
  }
}

export default App;
