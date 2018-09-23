import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
 
class TestDisqus extends React.Component {
  handleNewComment(comment) {
    console.log(comment.text);
  }
 
  render() {
    return (
      <ReactDisqusComments
        shortname="trifenix"
        identifier="something-unique-12345"
        title="Example Thread"
        url="https://trifenix-draft-v001.netlify.com/arquitectura-sin-servidores-y-microservicios"
        category_id="123456"
        onNewComment={this.handleNewComment}/>
    );
  }
}

export default TestDisqus