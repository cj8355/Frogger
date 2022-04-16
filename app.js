// creating variables to select the html elements
const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseBtn = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
const logsLeft = document.querySelectorAll('.log-left')
const logsRight = document.querySelectorAll('.log-right')


const width = 9

// declaring a variable to keep tract of the position of the frog in the grid
let currentIndex = 76

// creating a function to move the frog based on the keyobard arrow keys
function moveFrog(e) {
    // removes the frog class from the current square so that it can be moved to another square
    squares[currentIndex].classList.remove('frog')
    
    // using a switch statement to determine what to do based on what key the user clicked, e.g. user clicked left arrow key then move left
    switch(e.key) {
        case 'ArrowLeft': 
        if (currentIndex % width !== 0) currentIndex -= 1
        break
        case 'ArrowRight': 
        if (currentIndex % width < width - 1) currentIndex += 1
        break
        case 'ArrowUp': 
        if (currentIndex - width >= 0) currentIndex -= width
        break
        case 'ArrowDown': 
        if (currentIndex + width < width * width) currentIndex += width
        break
    }

    // console.log(squares)

    // add the frog class to make the frog appear in the selected square
    squares[currentIndex].classList.add('frog')

}

// event listener to listen for anu keyup inputs so that the frog can then be moved
document.addEventListener('keyup', moveFrog)

function autoMoveLogs() {
    logsLeft.forEach(logLeft => moveLogLeft(logLeft)) 
    logsRight.forEach(logRight => moveLogRight(logRight)) 
}

autoMoveLogs

function moveLogLeft(logLeft) {
    switch(true) {
        case logLeft.classList.contains('l1') :
            logLeft.classList.remove('l1')
            logLeft.classList.add('l2')
            break
        case logLeft.classList.contains('l2') :
            logLeft.classList.remove('l2')
            logLeft.classList.add('l3')
            break  
        case logLeft.classList.contains('l3') :
            logLeft.classList.remove('l3')
            logLeft.classList.add('l4')
            break  
        case logLeft.classList.contains('l4') :
            logLeft.classList.remove('l4')
            logLeft.classList.add('l5')
            break   
        case logLeft.classList.contains('l5') :
            logLeft.classList.remove('l5')
            logLeft.classList.add('l1')
            break
    }
}


function moveLogRight(logRight) {
    switch(true) {
        case logRight.classList.contains('l1') :
            logRight.classList.remove('l1')
            logRight.classList.add('l5')
            break
        case logRight.classList.contains('l2') :
            logRight.classList.remove('l2')
            logRight.classList.add('l1')
            break  
        case logRight.classList.contains('l3') :
            logRight.classList.remove('l3')
            logRight.classList.add('l2')
            break  
        case logRight.classList.contains('l4') :
            logRight.classList.remove('l4')
            logRight.classList.add('l3')
            break   
        case logRight.classList.contains('l5') :
            logRight.classList.remove('l5')
            logRight.classList.add('l4')
            break
    }
}


setInterval(autoMoveLogs, 1000)