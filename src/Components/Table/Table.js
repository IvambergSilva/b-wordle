import React from 'react'
import Row from '../Row/Row'

export default function Table({ guesses, currentGuess, round, wordSize }) {
    return (
        <div>
            {guesses.map((guess, index) => {
                if (round === index) {
                    return <Row key={index} currentGuess={currentGuess} wordSize={wordSize} />
                }
                return <Row key={index} guess={guess} wordSize={wordSize} />
            })}
        </div>
    )
}
