import React, { Component } from 'react';
import './App.css';
import { Container, Button, Image, Icon, Header, Grid } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container textAlign="justified">
        <div className='title'>
          <Header as='h1' textAlign='center' dividing>
            Blog posts populares
          </Header>
        </div>

        <div className='sorting'>
          <Header as='h3' inline>
            Orden:
          </Header>
          <Button basic color='blue'>Ascendente</Button>
          <Button content='Descendente' primary />
        </div>

        <Grid centered columns={3} >
          <Grid.Column width={6} className="post">
            <Image src='http://blog.makeitreal.camp/assets/images/bg-images/bundler.jpg' size='large' />
          </Grid.Column>
          <Grid.Column textAlign='center' width={1} className="post" verticalAlign="middle">
            <Icon name='angle up' />
            <Header as='h3'>42</Header>
            <Icon name='angle down' />

          </Grid.Column>
          <Grid.Column width={9} className="post">
            <a href="http://blog.makeitreal.camp/manejo-de-dependencias-en-ruby-con-bundler/" target='_blank' rel="noopener noreferrer">
              <Header as='h3' color='blue'>
                Manejo de dependencias en Ruby con Bundler
              </Header>
            </a>
            <p>Bundler es una manejador de dependencias para Ruby. Aunque viene incluido con Rails, Bundler no es exclusivo de Rails, lo puedes usar para manejar las dependencias de cualquier proyecto de Ruby.</p>
            <p className="author">Escrito por: <Image src='//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405' size='mini' circular inline /></p>
          </Grid.Column>
        </Grid>
      </Container>

    );
  }
}

export default App;
