import React, { Component } from 'react';
import './App.css';
import { Image, Icon, Header, Grid } from 'semantic-ui-react';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postMod: '',
      posts: this.props.posts
    }
    this.sortPosts = this.sortPosts.bind(this);
  }

  componentDidMount() {
    this.sortPosts('desc');
  }

  voteUp(e) {
    this.setState({postMod: this.state.posts[e]}, () => {
      this.updateVotes(e, 'inc');
    });
  }

  voteDown(e) {
    this.setState({postMod: this.state.posts[e]}, () => {
      this.updateVotes(e, '');
    });
  }

  updateVotes(index, type) {
    this.setState(prevState => ({
      postMod: {
          ...prevState.postMod,
          votes: type === 'inc' ? prevState.postMod.votes + 1 : prevState.postMod.votes - 1
      }
    }), () => {
      this.setState({
        posts: [
          ...this.state.posts.slice(0, index),
          this.state.postMod,
          ...this.state.posts.slice(index + 1)
        ]
      }, () => {
        this.sortPosts('desc');
      })
    });
  }

  sortPosts(type) {
    this.setState({posts: type === 'desc' ? [...this.state.posts].sort((a, b) => a.votes < b.votes) : [...this.state.posts].sort((a, b) => a.votes > b.votes)})
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        {this.state.posts.map((post, i) => {
          return (
            <Grid centered columns={3} key={post.id} >
              <Grid.Column width={6} className="post">
                <Image src={post.post_image_url} size='large' />
              </Grid.Column>
              <Grid.Column textAlign='center' width={2} className="post" verticalAlign="middle">
                <Icon name='angle up' onClick={() => this.voteUp(i)}/>
                <Header as='h3'>{post.votes}</Header>
                <Icon name='angle down' onClick={() => this.voteDown(i)}/>
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

export default Articles;
