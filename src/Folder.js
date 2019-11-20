import React from 'react';

function Folder(props) {
    return (
      <div onClick={() => props.click() }>{props.name}</div>
      );
}
 
export default Folder;