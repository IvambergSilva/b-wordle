import React from 'react'
import Styles from './KeyBoard.module.scss'

import { RiDeleteBack2Fill } from 'react-icons/ri'

export default function KeyBoard({ usedKeys }) {
    const keyboardLines = [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l", ""],
        ["z", "x", "c", "v", "b", "n", "m", "Enter"],
    ]

    return (
        <div className={Styles.keyboard}>
            {keyboardLines.map((keyboardLine, index) =>
                <section key={index}>
                    {keyboardLine.map((letter, i) =>
                        index === 1 && i === keyboardLine.length - 1 
                            ? (
                                <div key={letter}
                                    className={`${Styles.letter}`}
                                    id='Backspace'
                                >
                                    {<RiDeleteBack2Fill />}
                                </div>
                            )
                            : index === 2 && i === keyboardLine.length - 1 
                            ? (
                                <div key={letter}
                                    className={`${Styles.letter} ${Styles.lastLine}`}
                                >
                                    {letter}
                                </div>
                            )
                            : (
                                <div key={letter}
                                    className={`${Styles.letter} ${Styles[usedKeys[letter]]}`}
                                >
                                    {letter}
                                </div>
                            )
                    )}

                </section>
            )}
        </div>
    )
}
