import React from 'react';
import { Link, withRouter } from 'react-router';
import Dropzone from 'react-dropzone';
import uploadRequest from 'superagent';

import Navigation from '../navigation/navigation_container';

//
// const UPLOAD_PRESET = "kmoore-insta";
// const UPLOAD_URL = "https://api.cloudinary.com/v1_1/dc4ro79uf/image/upload";
//
// class PostForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.state = {
//       uploadedFile: null,
//       cloudUrl: null,
//       caption: ""
//     };
//   }
//
//   onImageDrop(files) {
//     this.setState({
//       uploadedFile: files[0]
//     });
//     this.handleImageUpload(files[0]);
//   }
//
//   handleImageUpload(file) {
//     let upload = uploadRequest.post(UPLOAD_URL)
//                         .field('upload_preset', UPLOAD_PRESET)
//                         .field('file', file);
//
//     upload.end((err, response) => {
//       if (err) {
//         console.error(err);
//       }
//
//       if (response.body.secure_url !== '') {
//         this.setState({
//           cloudUrl: response.body.secure_url
//         });
//       }
//     });
//   }
//
//   update(field) {
//     return e => this.setState({
//       [field]: e.currentTarget.value
//     });
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     const photo = {
//       user_id: this.props.currentUser.id,
//       image_url: this.state.cloudUrl,
//       caption: this.state.caption
//     };
//     this.props.createPhoto({photo});
//     hashHistory.push('/');
//   }
//
//   render() {
//     return (
//
//       <form className="upload-container"
//             onSubmit={this.handleSubmit}>
//         <h1>Upload Photo</h1>
//         <div className="file-upload">
//
//           { this.state.cloudUrl === null
//               ?
//               <Dropzone className="dropzone"
//                 multiple={false}
//                 accept="image/*"
//                 onDrop={this.onImageDrop.bind(this)}>
//                 <img className="upload-icon" src="https://res.cloudinary.com/dc4ro79uf/image/upload/v1484939529/cloud_kbngsp.png"></img>
//                 <p>Drag and drop a file here to upload</p>
//                 <p className="button">Or choose an image</p>
//               </Dropzone>
//               :
//               <div className="dropzone">
//                 <img className="upload-image" src={this.state.cloudUrl}/>
//               </div>
//           }
//         </div>
//         <div className="post-input">
//             <input
//               type="text"
//               placeholder="Add a caption..."
//               value={this.state.caption}
//               onChange={this.update("caption")}
//               className="upload-caption"/>
//               <input type="submit" value="Upload" className="upload-button" />
//           </div>
//         </form>
//
//     );
//   }
// }
//
// export default withRouter(PostForm);
