import './botao.css'

const Botao = ({nome, evento}) => {
    return (
            <button onClick={evento} className='button'>{nome}</button>
    )
}

export default Botao