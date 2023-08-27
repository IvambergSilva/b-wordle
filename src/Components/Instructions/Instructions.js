import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import Styles from './Instructions.module.scss'

export default function Instructions({ onResultChange }) {
    const wordsExamples = ['camisa', 'alegre', 'comida']

    return (
        <div className={Styles.Instructions}>
            <section>
                <div className={Styles.closeModal} onClick={onResultChange}>
                    <AiOutlineClose />
                </div>
                <h1>Bem-vindo ao Wordle! Seu desafio é descobrir a palavra certa em um número limitado de tentativas. Cada tentativa revelará o quão perto você está da solução.</h1>
                <ol>
                    <li>As letras em verde significam que fazem parte da palavra e estão na posição correta.</li>
                    <div>
                        {wordsExamples[0].split('').map((letter, index) => (
                            index === 2
                                ? <div className={`${Styles.letter} ${Styles.correctPosition}`} key={letter}>{letter}</div>
                                : <div className={Styles.letter} key={letter}>{letter}</div>
                        ))}
                    </div>
                    <li>As letras em amarelo indicam que fazem parte da palavra, mas não estão na posição correta.</li>
                    <div>
                        {wordsExamples[1].split('').map((letter, index) => (
                            index === 4
                                ? <div className={`${Styles.letter} ${Styles.incorrectPosition}`} key={letter}>{letter}</div>
                                : <div className={Styles.letter} key={letter}>{letter}</div>
                        ))}
                    </div>
                    <li>As letras em cinza não fazem parte da palavra.</li>
                    <div>
                        {wordsExamples[2].split('').map((letter, index) => (
                            index === 1
                                ? <div className={`${Styles.letter} ${Styles.incorrectGuess}`} key={letter}>{letter}</div>
                                : <div className={Styles.letter} key={letter}>{letter}</div>
                        ))}
                    </div>
                </ol>
                <p>Use essas pistas para formar sua estratégia e adivinhar a palavra correta! </p>
                <span>
                    Boa sorte e divirta-se jogando o B-Wordle!
                </span>
            </section>
        </div>
    )
}
