import React, { Component } from 'react';

export default class Post extends Component {
  //ciclo de vida luego que el componente haya sido cargado
  async componentDidMount() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const resp = await data.json();
    console.log(resp);
    this.setState({ post: resp });
  }

  state = {
    post: [],
  };

  render() {
    return (
      <div>
        <h1> post </h1>
        {this.state.post.map((p) => {
          return (
            <div key={p.id}>
              <h1> {p.title}</h1>
              <p>{p.body}</p>
            </div>
          );
        })}{' '}
      </div>
    );
  }
}
