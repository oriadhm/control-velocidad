input.onPinPressed(TouchPin.P0, function () {
    Tiempo_0 = control.eventTimestamp() / 1000000
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
})
input.onPinPressed(TouchPin.P2, function () {
    Tiempo_1 = control.eventTimestamp() / 1000000
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        `)
    TIEMPO = Tiempo_1 - Tiempo_0
    basic.showNumber(TIEMPO)
    VELOCIDAD = 0.54 / TIEMPO
    for (let index = 0; index < 2; index++) {
        basic.showNumber(VELOCIDAD)
        basic.showString("m/s")
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
    }
})
let VELOCIDAD = 0
let TIEMPO = 0
let Tiempo_1 = 0
let Tiempo_0 = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
