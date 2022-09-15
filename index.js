let cards=[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageel=document.getElementById("message-el")
let sumel=document.getElementById("sum-el")
let cardsel=document.getElementById("cards-el")
let playeerel=document.getElementById("player-el")

let player={
    name: "Megha",
    chips: 145
}
playeerel.textContent=player.name+ ": $"+player.chips
function getRandom(){
    let rn= Math.floor(Math.random()*11 )+1
    if(rn===1){
        return 11
    } else if (rn>10){
        return 10
    }else{
        return rn
    }

}
function start(){
    isAlive=true
    let first= getRandom()
    let second= getRandom()
    cards=[first,second]
    sum=first+second
    render()
}

function render(){
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! Do you want to play again? "
        hasBlackJack = true
    } else {
        message = "You're out of the game! Do you want to play again? "
        isAlive = false
    }
    messageel.textContent=message 
    sumel.textContent="Sum: "+ sum  
    cardsel.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsel.textContent+=cards[i]+" "
    }

}
function newcard() {
    if(isAlive===true && hasBlackJack===false){
        let card=getRandom()
        sum+=card
        cards.push(card)
        render()
    }
}