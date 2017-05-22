import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import uploadRequest from 'superagent';

import Navigation from '../navigation/navigation_container';

const UPLOAD_PRESET = "appimage";
const UPLOAD_URL = " https://api.cloudinary.com/v1_1/cloneinstagram/image/upload";

class PostUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      user_id: null,
      photo_url: "",
      description: "",
      location: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhotoDrop = this.handlePhotoDrop.bind(this);
    this.handlePhotoClick = this.handlePhotoClick.bind(this);
  }

  handlePhotoDrop(photo) {
    this.handlePhotoUpload(photo[0]);
  }

  handlePhotoClick(e) {
    e.preventDefault();
  }

  handlePhotoUpload(photo) {
    let upload = uploadRequest.post(UPLOAD_URL)
                        .field('upload_preset', UPLOAD_PRESET)
                        .field('file', photo);

    upload.end((err, response) => {
      if (response.body.secure_url !== '') {
        this.setState({
          photo_url: response.body.secure_url
        });
      }
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = this.state;
    post.user_id = this.props.currentUser.id;
    this.props.createPost({post});
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="upload-page">
        <Navigation />
        <div>
          <div className="upload-frame-merge">
            <div className="upload-sub-frame-left">
              <h1 className="upload-title-text">Add image</h1>
            </div>
            <div className="upload-sub-frame-right">
              <div className="upload-input-frame">
                <div className="upload-input">
                  <div className="upload-input-left">
                    Image
                  </div>
                  <Dropzone multiple={false} accept="image/*"
                    onDrop={this.handlePhotoDrop} className="upload-input-right-dropzone">
                    {
                      this.state.photo_url === "" ?
                        <div>
                          <h3>Drag and Drop<br/>
                            or </h3>
                          <button>Click Here!</button>
                        </div>
                        :
                        <img src={this.state.photo_url} />
                    }
                  </Dropzone>
                </div>
                <form onSubmit={this.handleSubmit} className="upload-input-frame">
                  <div className="upload-input">
                    <h1 className="upload-input-left">Description</h1>
                    <input type="text" onChange={this.update('description')} value={this.state.description} className="upload-input-right"></input>
                  </div>
                  <div className="upload-input">
                    <h1 className="upload-input-left">Location</h1>
                    <input type="text" onChange={this.update('location')} value={this.state.location} className="upload-input-right"></input>
                  </div>
                  <div className="upload-input">
                    <div className="upload-input-left"></div>
                    <input type="submit" value="Submit" className="upload-input-right-button"></input>
                  </div>
                </form>
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default PostUpload;
