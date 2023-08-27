import React from 'react'
import { BsFillQuestionSquareFill } from 'react-icons/bs'
import Logo from '../../Images/Logo.png'
import Styles from './Header.module.scss'

export default function Header({ onResultChange }) {
    return (
        <header className={Styles.Header}>
            <img src={Logo} alt='Logo do site' className={Styles.logo}/>
            <div onClick={onResultChange}>
                <BsFillQuestionSquareFill />
            </div>
            <p>
                Boa sorte e divirta-se jogando o <br/> <span>B-Wordle</span>!
            </p>
        </header>
    )
}
