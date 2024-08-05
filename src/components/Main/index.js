import './main.css'

export const Main = () => {
    return (
        <main className='main__container'>
            <h2>Choose one:</h2>
            <div className='container__jogo'>
                <button><img src="/assets/papel.png" alt="mão fazendo papel"/></button>
                <button><img src="/assets/tesoura.png" alt="mão fazendo tesoura"/></button>
                <button><img src="/assets/pedra.png" alt="mão fazendo pedra"/></button>
            </div>
        </main>
    )
}