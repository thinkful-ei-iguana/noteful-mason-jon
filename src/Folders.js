import React from 'react';
import Folder from './Folder';
import { NavLink } from 'react-router-dom';

function Folders(props) {
  // console.log(props);
  
  const files = props.folders.map((folder, i) => 
    <NavLink to={`/folder/${folder.id}`}>
    <Folder id={folder.id} name={folder.name} click={props.click} 
      /> </NavLink>
      )

    return (
      <div> { files } </div>
    
    );
}


 
export default Folders;