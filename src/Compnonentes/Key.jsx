import React,{ useContext} from "react";
import {AppContext} from '../App'

function Key({keyVal,bigKey}){
    const {board,setBoard,currentAttemp,setCurrentAttemp} = useContext(AppContext)
    const selectLetter = () => {
        if(keyVal === 'ENTER'){
            if(currentAttemp.letter !== 5) return;
            setCurrentAttemp({attemp:currentAttemp.attemp +1,
                              letter:0})
        }else if(keyVal === 'DELETE'){
            if(currentAttemp.letter === 0) return;
            const newBoard = [...board]
            newBoard[currentAttemp.attemp][currentAttemp.letter-1] = ''
            const newLetter = currentAttemp.letter -1
            setBoard(newBoard)
            setCurrentAttemp({...currentAttemp,letter:newLetter})
        }else {
            if(currentAttemp.letter > 4) return;
            const newBoard = [...board]
            newBoard[currentAttemp.attemp][currentAttemp.letter] = keyVal
            //const newAttmp = currentAttemp.attemp +1
            const newLetter = currentAttemp.letter +1
            setBoard(newBoard)
            setCurrentAttemp({...currentAttemp,letter:newLetter})
        }
    }
    return <div className="key" id = {bigKey && 'big'} onClick={selectLetter}>
        {keyVal}
        </div>
}


export default Key;