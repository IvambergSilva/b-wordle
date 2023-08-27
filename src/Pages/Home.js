import React, { useEffect, useState } from "react";
import Wordle from "../Components/Wordle/Wordle";
import { toast } from "react-toastify";

export default function Home() {
    const [words, setWords] = useState([])
    const [chosenWord, setChosenWord] = useState('')

    useEffect(() => {
        fetch('https://b-wordle-api.onrender.com/wordsGroup')
            .then(res => res.json())
            .then((data) => {
                setWords(data)
            }).catch((error) => {
                toast.warn("Houve um erro no carregamento 😕", { style: { fontSize: '2em' } });
            })
    }, [])

    useEffect(() => {
        if (words.length > 0) {
            const randomWord = Math.floor(Math.random() * words.length)
            const randomChosenWord = words[randomWord].word
            setChosenWord(randomChosenWord)
        }
    }, [words])

    return (
        <div>
            <Wordle chosenWord={chosenWord} />
        </div>
    )
}