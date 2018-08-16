import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Button, Image, Icon, Divider, Header, Segment, Grid, Rail } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container textAlign="justified">
        <Header as='h1' textAlign='center' dividing>
          Blog posts populares
        </Header>
        
        <div>
          <p>Orden: </p>
          <Button content='Ascendente' primary inline />
          <Button basic color='blue'>Ascendente</Button>
          <Button content='Descendente' primary />
        </div>

        <Grid centered columns={3}>
          <Grid.Column width={6}>
            <Image src='http://blog.makeitreal.camp/assets/images/bg-images/bundler.jpg' size='large' />
          </Grid.Column>
          <Grid.Column textAlign='center' width={1}>
            <Icon name='angle up' />
            <p>42</p>
            <Icon name='angle down' />

          </Grid.Column>
          <Grid.Column width={9}>
            <h3>Manejo de dependencias en Ruby con Bundler</h3>
            <p>Bundler es una manejador de dependencias para Ruby. Aunque viene incluido con Rails, Bundler no es exclusivo de Rails, lo puedes usar para manejar las dependencias de cualquier proyecto de Ruby.</p>
            <p>Escrito por: <Image src='//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405' size='mini' circular inline /></p>
          </Grid.Column>
        </Grid>
      </Container>

    );
  }
}

export default App;
