import './main.css'
import { Fragment } from 'react'

export const Main = () => {
    return (
        <main className='main__container'>
            <h2>Choose one:</h2>
            <div className='container__jogo'>
                <button><img src="/assets/papel.png"/></button>
                <button><img src="/assets/tesoura.png"/></button>
                <button><img src="/assets/pedra.png"/></button>
            </div>
        </main>
    )
}