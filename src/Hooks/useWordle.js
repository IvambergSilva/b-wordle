import { useState } from "react"
import { toast } from "react-toastify"

const useWordle = (chosenWord) => {
    
    const roundSize = 7
    const wordSize = 6

    const [round, setRound] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(roundSize)])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)
    const [usedKeys, setUsedKeys] = useState({})


    const handleKeyClick = (e) => {
        e.target.id === 'Backspace'
            ? handleKeyUp({ key: e.target.id })
            : e.target.tagName === 'svg'
                ? handleKeyUp({ key: e.target.parentNode.id })
                : handleKeyUp({ key: e.target.textContent })
    }

    const handleKeyUp = ({ key }) => {
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < wordSize) {
                setCurrentGuess((previous) => {
                    return previous + key.toLowerCase()
                })
            }
        }

        if (key === 'Enter') {
            if (history.includes(currentGuess)) {
                toast.warn(`A palavra "${currentGuess.toUpperCase()}" já foi inserida`, { style: { fontSize: '2em' } });
                return
            }

            if (currentGuess.length !== wordSize) {
                toast.warn(`A palavra "${currentGuess.toUpperCase()}" não possui ${wordSize} letras`, { style: { fontSize: '2em' } });
                return
            }

            addNewGuess(formatGuess())
        }

        if (key === 'Backspace') {
            setCurrentGuess((previous) => {
                return previous.slice(0, -1)
            })
            return
        }
    }

    const formatGuess = () => {
        let solution = [...chosenWord]

        let formatedGuess = [...currentGuess].map((letter) => {
            return { key: letter, color: 'incorrectGuess' }
        })

        formatedGuess.forEach((letter, index) => {
            if (solution[index] === letter.key) {
                formatedGuess[index].color = 'correctPosition'
                solution[index] = null
            }
        })

        formatedGuess.forEach((letter, index) => {
            if (solution.includes(letter.key)) {
                formatedGuess[index].color = 'incorrectPosition'
                solution[solution.indexOf(letter.key)] = null
            }
        })

        return formatedGuess
    }

    const addNewGuess = (formatedGuess) => {
        if (currentGuess === chosenWord) {
            setIsCorrect(true)
        }

        setGuesses((previousGuesses) => {
            let newGuesses = [...previousGuesses]
            newGuesses[round] = formatedGuess
            return newGuesses
        })

        setHistory((previousGuesses) => {
            return [...previousGuesses, currentGuess]
        })

        setRound(round + 1)

        setUsedKeys((previousUsedKeys) => {
            let newKeys = { ...previousUsedKeys }

            formatedGuess.forEach((letter) => {
                const currentColor = newKeys[letter.key]

                if (letter.color === 'correctPosition') {
                    newKeys[letter.key] = 'correctPosition'
                    return
                }

                if (letter.color === 'incorrectPosition' && currentColor !== 'correctPosition') {
                    newKeys[letter.key] = 'incorrectPosition'
                    return
                }

                if (letter.color === 'incorrectGuess' && currentColor !== 'incorrectPosition' && currentColor !== 'correctPosition') {
                    newKeys[letter.key] = 'incorrectGuess'
                    return
                }
            })
            return newKeys
        })
        setCurrentGuess('')
    }

    return { round, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp, handleKeyClick, wordSize, roundSize }
}

export default useWordle