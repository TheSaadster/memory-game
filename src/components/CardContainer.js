import React, { useState, useEffect } from 'react';
import Card from './Card';
import deku from '../images/deku.jpeg';
import eren from '../images/eren.jpg';
import goku from '../images/goku.jpg';
import gon from '../images/gon.jpg';
import itachi from '../images/itachi.jpg';
import killua from '../images/killua.jpg';
import L from '../images/L.jpeg';
import light from '../images/light.png';
import luffy from '../images/luffy.png';
import naruto from '../images/naruto.png';
import sasuke from '../images/sasuke.png';
import tanjiro from '../images/tanjiro.jpeg';

function CardContainer(props) {
    const { handleGameLogic, score, highScore } = props;

    let images = [
        {
            src: deku,
            title: 'Deku',
            backgroundColor: 'rgb(255 223 137)',
            borderStyle: '1px solid rgb(255 223 137)',
        },
        {
            src: eren,
            title: 'Eren Yeager',
            backgroundColor: 'rgb(54 145 154)',
            borderStyle: '1px solid rgb(54 145 154)',
        },
        {
            src: goku,
            title: 'Goku',
            backgroundColor: '#24DBFF',
            borderStyle: '1px solid #24DBFF',
        },
        {
            src: gon,
            title: 'Gon Freecss',
            backgroundColor: 'rgb(76 136 89)',
            borderStyle: '1px solid rgb(76 136 89)',
        },
        {
            src: itachi,
            title: 'Itachi Uchiha',
            backgroundColor: 'rgb(111 31 0)',
            borderStyle: '1px solid rgb(111 31 0)',
        },
        {
            src: killua,
            title: 'Killua',
            backgroundColor: '#D2AEF6',
            borderStyle: '1px solid #D2AEF6',
        },
        {
            src: L,
            title: 'L',
            backgroundColor: 'rgb(52 52 60)',
            borderStyle: '1px solid rgb(52 52 60)',
        },
        {
            src: light,
            title: 'Light Yagami',
            backgroundColor: 'rgb(245 194 80)',
            borderStyle: '1px solid rgb(245 194 80)',
        },
        {
            src: luffy,
            title: 'Luffy',
            backgroundColor: 'rgb(136 96 6)',
            borderStyle: '1px solid rgb(136 96 6)',
        },
        {
            src: naruto,
            title: 'Naruto Uzumaki',
            backgroundColor: '#659EF5',
            borderStyle: '1px solid #659EF5',
        },
        {
            src: sasuke,
            title: 'Sasuke Uchiha',
            backgroundColor: '#7341A5',
            borderStyle: '1px solid #7341A5',
        },
        {
            src: tanjiro,
            title: 'Tanjiro',
            backgroundColor: 'rgb(226 143 58)',
            borderStyle: '1px solid rgb(226 143 58)',
        },
    ];

    const [cards, setNewCards] = useState(images);

    const shuffle = (newCards) => {
        for (let i = newCards.length - 1; i > 0; i--) {
            let randomIdx = Math.floor(Math.random() * i);
            [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
        }
    };

    useEffect(() => {
        const newCards = [...cards];
        shuffle(newCards);
        setNewCards(newCards);
    }, [score, highScore]);

    return (
        <>
            {cards.map((card) => (
                <Card card={card} key={card.title} handleGameLogic={handleGameLogic} />
            ))}
        </>
    );
}

export default CardContainer;