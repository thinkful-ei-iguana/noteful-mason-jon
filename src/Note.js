import React from 'react';
import { Link } from 'react-router-dom';

function Note(props) {
  // console.log(props)
  return (
    <>
    <Link to={`/note/${props.id}`}>{props.name}</Link>
      <div>{props.content}</div>
      <div>{props.modified}</div>
      
    </>

    );
}

export default Note;