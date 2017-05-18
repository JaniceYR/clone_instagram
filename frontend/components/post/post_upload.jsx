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
  }

  handlePhotoDrop(photo) {
    // this.setState({
    //   uploadedFile: photo[0]
    // });
    this.handlePhotoUpload(photo[0]);
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
      <div>
        <Navigation />
        <h1> this is post upload component</h1>
        <div>
          <div>
            <div>
              Add image
            </div>
            <div>
              <form onSubmit={this.handleSubmit}>
                Image
                <Dropzone multiple={false} accept="image/*"
                  onDrop={this.handlePhotoDrop}>
                  {
                    this.state.photo_url === "" ?
                      <h3>Drag and drop a file here to upload</h3>
                      :
                      <img src={this.state.photo_url} />
                  }

                </Dropzone>
                Description
                <input type="text" onChange={this.update('description')} value={this.state.description}></input>
                Location
                <input type="text" onChange={this.update('location')} value={this.state.location}></input>
                <input type="submit" value="Submit"></input>
              </form>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default PostUpload;
