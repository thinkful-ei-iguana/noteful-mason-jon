import React from 'react';
import Note from './Note';

export default function Notes(props) {
  const text = props.notes
  .filter(note => !props.selected || (note.folderId === props.selected))
  .map((note, i) => 
    
  <Note id={note.id} 
        name={note.name} 
        modified={note.modified} 
        content={note.content}  
      /> 
      )

    return (
      <div> { text } </div>
    
    );
}