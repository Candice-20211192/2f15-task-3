let count = 0
input.onButtonPressed(Button.B, function () {
    count = 5
    basic.showNumber(count)
    for (let index = 0; index < 4; index++) {
        count += -1
        basic.showNumber(count)
    }
    basic.showNumber(count)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . . . .
        . . . . .
        # . . . #
        . # . # .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
})
