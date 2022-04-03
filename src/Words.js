import wordBank from './wordle-bank.txt'
// this represent the default board when the game start
export const defaultBoard = [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]
]

const generateWordSet = async () => {
    let wordSet;
    await fetch(wordBank)
    .then((response) => response.text())
    .then(result => {
        const wordArr = result.split("")
    })
}
