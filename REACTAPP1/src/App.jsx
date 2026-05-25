import { useState } from 'react'
import './App.css'

import Notas from './Notas';

function App() {
  return (
    <div className="container mt-4">

      {/* Notas */}   
      <h1 className="text-center text-primary">Notas</h1>
      <Notas />

    </div>
  );
}

export default App
