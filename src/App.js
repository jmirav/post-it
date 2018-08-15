import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container textAlign="justified">
        <h1>Blog posts populares</h1>
        <hr/>


        <div>
          <p>Orden: </p>
          <Button content='Acendente' primary />
          <Button content='Descendente' primary />
        </div>
        <div>
          <Image src='/images/wireframe/image.png' size='small' />
        </div>

        <Icon name='angle up' />
        <p>Votos</p>
        <Icon name='angle down' />

        <Container>
          <h2>Descubre si Make it es</h2>
        </Container>


      </Container>

    );
  }
}

export default App;
