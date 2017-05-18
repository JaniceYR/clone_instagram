import React from 'react';
import { Link, withRouter } from 'react-router';
import Dropzone from 'react-dropzone';
import uploadRequest from 'superagent';

import Navigation from '../navigation/navigation_container';

const UPLOAD_PRESET = "appimage";
const UPLOAD_URL = " https://api.cloudinary.com/v1_1/cloneinstagram/image/upload";

class PostUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h1> this is post upload component</h1>
      </div>
    );
  }
}

export default PostUpload;
