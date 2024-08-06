import { useState } from 'react'
import './main.css'
import Play from '../Play';


function Game() {

    const [escolhaUsuario, setEscolhaUsuario] = useState(null);
    const [escolhaMaquina, setEscolhaMaquina] = useState(null);
    const options = ['rock','paper','scissors']
    const machineSelection = Math.floor(Math.random() * options.length);

    const handleEscolha = (escolha) => {
        setEscolhaUsuario(escolha);
        setEscolhaMaquina(options[machineSelection]);
    };
    
    console.log(escolhaUsuario,escolhaMaquina)
    console.log(Play(escolhaUsuario,escolhaMaquina))
    
    return (
        <main className='main__container'>
            <h2>Choose one:</h2>
            <div className='container__jogo'>
                <button onClick={() => handleEscolha('paper')}>
                    <img src="/assets/papel.png" alt="mão fazendo papel" />
                </button>
                <button onClick={() => handleEscolha('scissors')}>
                    <img src="/assets/tesoura.png" alt="mão fazendo tesoura" />
                </button>
                <button onClick={() => handleEscolha('rock')}>
                    <img src="/assets/pedra.png" alt="mão fazendo pedra" />
                </button>
            </div>
            {escolhaUsuario && <p>Você escolheu: {escolhaUsuario}</p>}
            {escolhaMaquina && <p>A máquina escolheu: {escolhaMaquina}</p>}
        </main>
    );
}

export default Game;