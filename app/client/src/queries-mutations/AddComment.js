import React from 'react';
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";


const AddComment = gql`
  mutation createComment($input: createCommentInput){
    Comment: createComment(input: $input){
      errors{
        msg
      }
      id
      userId
      user{
        id
        name
        email
        profileUrl
      }
      postId
      text
    }
  }
`
export default AddComment;
