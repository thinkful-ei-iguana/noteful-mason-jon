import React from 'react';
import Folder from './Folder';

function Folders(props) {
  console.log(props);
  
  const files = props.folders.map((folder, i) => 

    <Folder id={folder.id} name={folder.name}  
      /> 
      )

    return (
      <div> { files } </div>
    
    );
}


 
export default Folders;