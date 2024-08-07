import Scoreboard from '../Scoreboard'
import './header.css'

const Header = ({userScore,machineScore}) => {
    return (
        <header className='header'>
            <h1>Rock Paper and Scissors</h1>
            <Scoreboard userScore={userScore} machineScore={machineScore}/>
        </header>
    )
}

export default Header