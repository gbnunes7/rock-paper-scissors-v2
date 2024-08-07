import './scoreboard.css'
const Scoreboard = ({userScore,machineScore}) => {
    return(
        <div className="scoreboard">
            <h4>Score</h4>
            <p>User: {userScore}</p>
            <p>Machine: {machineScore}</p>
        </div>
    )
}

export default Scoreboard