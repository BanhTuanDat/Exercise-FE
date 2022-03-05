const dice = [
    'dice1.png',
    'dice2.png',
    'dice3.png',
    'dice4.png',
    'dice5.png',
    'dice6.png'
]

function roll() {
    let x = Math.floor(Math.random() * 5)
    let y = Math.floor(Math.random() * 5)
    let dice1 = document.getElementById('dice-1')
    let dice2 = document.getElementById('dice-2')
    dice1.src = `./img/${dice[x]}`
    dice2.src = `./img/${dice[y]}`
}