const Play = (user,machine) => {

    if(user === machine) {
        return "It's a draw"
    }
    
    if(
        (user === "rock" && machine === "scissors") ||
        (user === "scissors" && machine === "paper") ||
        (user === "paper" && machine === "rock") 
    ) {
        
        return "User wins"
    } else {
    
        return "Machine wins"
    }
}

export default Play



