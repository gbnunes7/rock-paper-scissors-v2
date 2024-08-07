import { useState } from 'react'
import './main.css'
import Play from '../Play';
import Header from '../Header';

function Game() {

    const [escolhaUsuario, setEscolhaUsuario] = useState(null);
    const [escolhaMaquina, setEscolhaMaquina] = useState(null);
    const [scoreMaquina, setScoreMaquina] = useState(0);
    const [scoreUsuario, setScoreUsuario] = useState(0);

    const options = ['rock','paper','scissors']
    const handleEscolha = (escolha) => {
        setEscolhaUsuario(escolha);
        const machineSelection = Math.floor(Math.random() * options.length);
        const maquinaEscolha = options[machineSelection];
        setEscolhaMaquina(maquinaEscolha);

        const resultado = Play(escolha, maquinaEscolha);

        if (resultado === "User wins") {
            setScoreUsuario((prevScore) => prevScore + 1);
        } else if (resultado === "Machine wins") {
            setScoreMaquina((prevScore) => prevScore + 1);
        }
    };
    
    
    return (
        <>
            <Header userScore={scoreUsuario} machineScore={scoreMaquina}/>
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
                <div className='resultado__container'>
                    <div className='choices__container'>
                        {escolhaUsuario && <p>User choice: <span>{escolhaUsuario.replace(escolhaUsuario[0], escolhaUsuario[0].toUpperCase())}</span></p>}
                        <p>VS</p>
                        {escolhaMaquina && <p>Machine choice: <span>{escolhaMaquina.replace(escolhaMaquina[0], escolhaMaquina[0].toUpperCase())}</span></p>}
                    </div>
                    <div className='div__resultado'>
                        {escolhaMaquina && escolhaUsuario && <p><span>{Play(escolhaUsuario, escolhaMaquina)}</span></p>}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Game;