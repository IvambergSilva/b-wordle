import React from 'react'

import Styles from './Modal.module.scss'

import { AiOutlineClose } from 'react-icons/ai'

export default function Modal({ result, onResultChange, round, chosenWord }) {
    return (
        <div className={Styles.container}>
            <div className={Styles.modal}>
                <div className={Styles.closeModal} onClick={onResultChange}>
                    <AiOutlineClose />
                </div>
                {result ?
                    <div>
                        <h1>Parabéns, você ganhou!</h1>
                        <p>Você acertou na {round}ª tentativa.</p>
                    </div>
                    :
                    <div>
                        <h1>Infelizmente você perdeu.</h1>
                        <span>A palavra era: <strong className={Styles.chosenWord}>{chosenWord}</strong></span>
                        <p>Boa sorte na próxima.</p>
                    </div>
                }
            </div>
        </div>
    )
}
