import React, { Component } from 'react';
import './App.css';
import posts from './posts'
import Articles from './Articles';
import { Container, Button, Header } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: posts,
      sortAsc: false
    };
  }

  handleClick() {
    this.setState({
      sortAsc: !this.state.sortAsc
    }, () => {
      console.log('Orden ascendente: ', this.state.sortAsc);
    })
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
          <Button color='blue' onClick={() => this.handleClick()} className={!this.state.sortAsc ? "basic" : null}>Ascendente</Button>
          <Button color='blue' onClick={() => this.handleClick()} className={this.state.sortAsc ? "basic" : null}>Descendente</Button>
        </div>

        <Articles posts={this.state.posts} sorting={this.state.sortAsc}/>

      </Container>
    );
  }
}

export default App;
