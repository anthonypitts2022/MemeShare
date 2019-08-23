import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import AddLike from '../queries-mutations/AddLike.js';
import AddComment from '../queries-mutations/AddComment.js';
import axios from 'axios';




class PostBox extends Component {

  constructor(props){
    super(props);

    this.state = {
      fileId: (typeof props.postInfo.fileId === 'undefined') ? "" : props.postInfo.fileId,
      fileType: (typeof props.postInfo.fileType === 'undefined') ? "" : props.postInfo.fileType,
      likeCount: (typeof props.postInfo.likeCount === 'undefined') ? 0: props.postInfo.likeCount,
      dislikeCount: (typeof props.postInfo.dislikeCount === 'undefined') ? 0: props.postInfo.dislikeCount,
      caption: (typeof props.postInfo.caption === 'undefined') ? "" : props.postInfo.caption,
      postId: (typeof props.postInfo.id === 'undefined') ? "" : props.postInfo.id,
      comments: (typeof props.postInfo.comments === 'undefined') ? [] : props.postInfo.comments,
      addCommentText: ''
    };

    this.handleAddCommentChange = this.handleAddCommentChange.bind(this);

    console.log(this.state.fileType)
  }

  handleAddCommentChange(event) {
    this.setState({addCommentText: event.target.value});
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <img className="card-img-top" src={"http://localhost:3301/file/" + this.state.fileId +"/"+this.state.fileType} ></img>
            <div className="card-body">
              <Mutation mutation={AddLike} variables={{"input": { "isLike":true, "postId": this.state.postId } }}>
                {addLike => <button onClick={addLike} className="badge badge-pill badge-primary">Like</button>}
              </Mutation>
              <span className="badge badge-success">{this.state.likeCount}</span>

              <Mutation mutation={AddLike} variables={{"input": { "isLike":false, "postId": this.state.postId } }}>
                {addLike => <button onClick={addLike} className="badge badge-pill badge-danger">Dislike</button>}
              </Mutation>
              <span className="badge badge-success">{this.state.dislikeCount}</span>


              <h5 className="card-title">{this.state.caption}</h5>

              <div>
                {this.state.comments.map(comment => (
                  <div key={comment.id}>
                    <p key={comment.id+"user"} className="card-text">{comment.userName + ": "}{comment.text}</p>
                    <p key={comment.id+ "space"}></p>
                  </div>
                ))}
              </div>

              <form>
                <div className="form-group">
                  <label htmlFor="InputComment"></label>
                  <input type="Comment" className="form-control" onChange={this.handleAddCommentChange} id="commentInput" aria-describedby="CommentHelp" placeholder="Enter Comment"></input>
                </div>
                <Mutation mutation={AddComment} variables={{"input": { "text":this.state.addCommentText, "postId": this.state.postId } }}>
                  {addComment => <button type="submit" onClick={addComment} className="badge badge-pill badge-primary">Add Comment</button>}
                </Mutation>
              </form>

            </div>
          </div>

        </div>
      </div>
    );
  }



}

export default PostBox;