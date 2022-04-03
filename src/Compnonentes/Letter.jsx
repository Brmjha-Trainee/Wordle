import React, { useContext, useState } from "react";
import {AppContext} from '../App'
function Letter({letterPos, attemptVal}){
    {/* Try to determing the letter of you postion */}
    const {board,correctWord,currentAttemp} = useContext(AppContext)
    const letter = board[attemptVal][letterPos]
    const correct =  correctWord.toUpperCase()[letterPos] === letter
    const almost = !correct && letter !== '' && correctWord.toUpperCase().includes(letter)
    const letterState =
    currentAttemp.attemp > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");
    return <div className='letter' id={letterState}>{letter}</div>
}

export default Letter;