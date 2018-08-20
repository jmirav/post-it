import React, { Component } from 'react';
import './App.css';
import posts from './posts'
import Articles from './Articles';
import { Container, Button, Header } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: posts
    };
  }

  render() {
    return (
      <Container textAlign="justified">
        <div className='title'>
          <Header as='h1' textAlign='center' dividing>
            Blog posts populares
          </Header>
        </div>

        <div className='sorting'>
          <Header as='h3'>
            Orden:
          </Header>
          <Button basic color='blue'>Ascendente</Button>
          <Button content='Descendente' primary />
        </div>

        <Articles posts={this.state.posts} />

      </Container>
    );
  }
}

export default App;
