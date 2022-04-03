import React, { useState } from "react"
import {defaultBoard} from './Words'
import './App.css'
import Board from './Compnonentes/Board'
import Keyboard from './Compnonentes/Keyboard'
import {createContext} from 'react'

export const AppContext = createContext();

function App() {
  const [board,setBoard] = useState(defaultBoard)
  const [currentAttemp,setCurrentAttemp] = useState({attemp:0,
                                                    letter:0})
  const correctWord = 'Right'
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      {/*All the component inside the APP context will get axis to the borad state*/}
      <AppContext.Provider 
      value ={{
        board,setBoard,
        currentAttemp,
        setCurrentAttemp,
        correctWord
        }}>
        <div className="game">
        <Board />
        <Keyboard />
        </div>

      </AppContext.Provider>
    </div>
  );
}

export default App;
