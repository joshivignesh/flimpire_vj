import React from 'react';
import { CssBaseline } from '@mui/material';
import {  Route, Routes } from 'react-router-dom';
import { ImportExport } from '@mui/icons-material';

import  useStyles from './styles';

import { Actors,  MovieInformation, Movies, NavBar, Profile } from './index';

const App= () => { 
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <CssBaseline />
    <NavBar></NavBar>
    <main className={classes.content}>
    <div className={classes.toolbar} />
      <Routes>
        <Route exact path="/" element="Movies"></Route>
        <Route exact path="/actors/:id" element="Actors"></Route>
        <Route exact path="/movieinformation/:id" element="MovieInformation"></Route>
        <Route path="/movies" element="Movies" ></Route>
      </Routes>
    </main>
  </div>
  )
}


export default App;
