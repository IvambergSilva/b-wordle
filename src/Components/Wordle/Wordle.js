import React, { useEffect, useState } from 'react'
import useWordle from '../../Hooks/useWordle'
import Table from '../Table/Table'
import KeyBoard from '../KeyBoard/KeyBoard'
import Modal from '../Modal/Modal'

import Styles from './Wordle.module.scss'
import Instructions from '../Instructions/Instructions'
import Header from '../Header/Header'

export default function Wordle({ chosenWord }) {

    const { currentGuess, guesses, handleKeyUp, isCorrect, round, usedKeys, handleKeyClick, wordSize, roundSize } = useWordle(chosenWord)

    const [closeModal, setCloseModal] = useState(true)

    const [showModal, setShowModal] = useState(false)

    const handleShowModalGeral = () => {
        setShowModal(false)
    }

    const [showInstructions, setShowInstructions] = useState(false)

    const handleShowInstructions = () => {
        setShowInstructions(!showInstructions)
    }

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)
        document.getElementById('keyboard').addEventListener('click', handleKeyClick)

        if ((isCorrect || round >= roundSize) && closeModal) {
            setTimeout(() => {
                setCloseModal(false)
                setShowModal(true)
                window.removeEventListener('keyup', handleKeyUp)
            }, 1200);
        }

        return () => {
            window.removeEventListener('keyup', handleKeyUp)
            document.getElementById('keyboard').removeEventListener('click', handleKeyClick)
        }

    }, [handleKeyUp, handleKeyClick, isCorrect, round, closeModal, roundSize])

    return (
        <div className={Styles.Wordle}>
            <Header
                onResultChange={handleShowInstructions}
            />

            <Table
                currentGuess={currentGuess}
                guesses={guesses}
                round={round}
                wordSize={wordSize}
            />

            <div className={Styles.KeyBoard} id='keyboard'>
                <KeyBoard
                    usedKeys={usedKeys}
                />
            </div>

            {showInstructions &&
                (<Instructions
                    onResultChange={handleShowInstructions}
                />)
            }

            {showModal && (
                <Modal
                    result={isCorrect}
                    round={round}
                    chosenWord={chosenWord}
                    onResultChange={handleShowModalGeral}
                />
            )}
        </div>
    )
}
