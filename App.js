import React from 'react';
import './App.css';
import Toronto from './components/Toronto';
import England from './components/England';

export default function App() {
  return (
    <div>
      <h1 className='App-title'>MY TRAVEL ROAD</h1>
      <hr></hr>
      <Toronto />
      <England />
    </div>
  )
};