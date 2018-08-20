import React, { Component } from 'react';
import './App.css';
import { Image, Icon, Header, Grid } from 'semantic-ui-react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votesAdded: [0, 0, 0, 0]
    }
  }

  voteUp(e) {
    console.log('Id del post: ', e);
    this.setState({
      votesAdded: this.state.votesAdded.map((vote, i) =>
        e === i ? vote + 1 : vote
      )
    });
    console.log('Votos: ', this.state.votesAdded[e]);
  }

  voteDown(e) {
    console.log('Id del post: ', e);
    this.setState({
      votesAdded: this.state.votesAdded.map((vote, i) =>
        e === i ? vote - 1 : vote
      )
    });
    console.log('Votos: ', this.state.votesAdded[e]);
  }

  render() {
    console.log('Posts props', this.props);

    const { posts } = this.props;
    return (
      <div>
        {posts.map((post, i) => {
          return (
            <Grid centered columns={3} key={post.id} >
              <Grid.Column width={6} className="post">
                <Image src={post.post_image_url} size='large' />
              </Grid.Column>
              <Grid.Column textAlign='center' width={2} className="post" verticalAlign="middle">
                <Icon name='angle up' onClick={() => this.voteUp(post.id - 1)}/>
                <Header as='h3'>{post.votes + this.state.votesAdded[post.id - 1]}</Header>
                <Icon name='angle down' onClick={() => this.voteDown(post.id - 1)}/>
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
        })}
      </div>
    )
  }
}

export default Posts;
