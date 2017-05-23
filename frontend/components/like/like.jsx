import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Like extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <figure className="like-button"></figure>
      </div>
    );
  }
}
export default Like;
