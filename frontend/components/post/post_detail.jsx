import React from 'react';

class PostDetail extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
  }

  render() {
    return(
      <div>
        <h1>PostDetail Page</h1>
        {this.props.post.photo_url}
      </div>

    );
  }
}

export default PostDetail;
