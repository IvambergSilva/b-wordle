import React from 'react'

import Styles from './Row.module.scss'



export default function Row({ guess, currentGuess, wordSize }) {
    if (guess) {
        return (
            <div className={`${Styles.row}`} >
                {guess.map((letter, index) => (
                    <div
                        key={index}
                        className={`${Styles.letter} ${Styles[letter.color]}`}
                    >{letter.key}</div>
                ))}
            </div >
        )
    }

    if (currentGuess) {
        let letter = currentGuess.split('')
        return (
            <div className={`${Styles.row} ${Styles.currentGuess}`}>
                {letter.map((letter, index) => (
                    <div
                        key={index}
                        className={`${Styles.letter} ${Styles.filled}`}
                    >{letter}</div>
                ))}
                {[...Array(wordSize - letter.length)].map((_, index) => (
                    <div key={index} className={Styles.letter}></div>
                ))}
            </div>
        )
    }

    return (
        <div className={Styles.row}>
            {Array.from({ length: wordSize }).map((_, index) => (
                <div className={Styles.letter} key={index}></div>
            ))}
        </div>
    )
}
