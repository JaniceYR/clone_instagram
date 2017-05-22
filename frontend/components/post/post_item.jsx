import React from 'react';
import Modal from 'react-modal';

import { Link, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

import PostDetailContainer from './post_detail_container';

const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.75)',
    zIndex          : 10
  },
  content : {
    position        : 'absolute',
    top             : '5%',
    left            : 0,
    right           : 0,
    bottom          : '5%',
    border          : '0px solid',
    padding         : 0,
    width           : '90%',
    height          : 'auto',
    maxWidth        : '935px',
    maxHeight       : '600px',
    borderRadius    : 0,
    margin          : 'auto',
    zIndex          : 11
  }
};

class PostItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    this.setState({modalOpen: true});
  }

  closeModal(){
    this.setState({modalOpen: false});
    this.props.history.push(`/${this.props.user.id}`);
  }

  render() {
    let thisPost = this.props.post;
    let thisUser = this.props.user;
    return(
      <div className="post-item-img-frame">
        <img src={thisPost.photo_url} className="post-item-img" onClick={this.openModal}/>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}
          onAfterOpen={this.onModalOpen}
          contentLabel="Modal"
          >
          <PostDetailContainer post={thisPost} user={thisUser}/>
        </Modal>
      </div>
    );
  }
}

export default withRouter(PostItem);
