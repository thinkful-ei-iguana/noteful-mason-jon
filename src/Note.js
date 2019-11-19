import React from 'react';

function Note(props) {
  // console.log(props)
  return (
    <>
      <div>{props.name}</div>
      <div>{props.modified}</div>
    </>

    );
}

export default Note;