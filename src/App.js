import React, { Component } from 'react';
import './App.css';
import posts from './posts'
import { Container, Button, Image, Icon, Header, Grid } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super();
  }

  renderPost(post) {
    return (
      <Grid centered columns={3} >
        <Grid.Column width={6} className="post">
          <Image src={post.post_image_url} size='large' />
        </Grid.Column>
        <Grid.Column textAlign='center' width={2} className="post" verticalAlign="middle">
          <Icon name='angle up' />
          <Header as='h3'>{post.votes}</Header>
          <Icon name='angle down' />

        </Grid.Column>
        <Grid.Column width={8} className="post">
          <a href={post.url} target='_blank' rel="noopener noreferrer">
          <Header as='h3' color='blue'>
            {post.title}
          </Header>
        </a>
        <p>{post.description}</p>
        <p className="author">Escrito por: <Image src={post.writer_avatar_url} size='mini' circular inline /></p>
      </Grid.Column>
    </Grid>
    )
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
          <Header as='h3' inline>
            Orden:
          </Header>
          <Button basic color='blue'>Ascendente</Button>
          <Button content='Descendente' primary />
        </div>

        <ul>
          {posts.map(this.renderPost)}
        </ul>

      </Container>

    );
  }
}

export default App;
