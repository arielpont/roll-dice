function rollDice () {
    isShakeing = true
    random_number = randint(1, 6)
    if (random_number == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (random_number == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `)
    }
    if (random_number == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
    }
    if (random_number == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    }
    if (random_number == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
    if (random_number == 6) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
    basic.pause(3000)
    basic.clearScreen()
    isShakeing = false
}
input.onGesture(Gesture.Shake, function () {
    if (isShakeing == false) {
        rollDice()
    }
})
function startAnimation () {
    for (let index = 0; index < 1; index++) {
        led.toggle(2, 2)
        basic.pause(250)
    }
}
let random_number = 0
let isShakeing = false
isShakeing = false
random_number = 0
basic.forever(function () {
    while (isShakeing == false) {
        startAnimation()
    }
})
