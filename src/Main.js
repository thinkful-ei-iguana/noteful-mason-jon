import React from 'react';
import Notes from './Notes';
import Folders from './Folders';
import Folder from './Folder';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

function Main(props) {


    return ( 
    <>
      
        <nav className="navbar" >
          <Link to='/'>Noteful</Link>
        </nav> 

        <Folders folders={props.folders} click={props.click} /> 

        <Notes notes={props.notes} selected={props.selected}/>
      
    </>
      );
    }

export default Main;