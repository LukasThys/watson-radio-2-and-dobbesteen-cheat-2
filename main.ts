radio.onReceivedNumber(function (receivedNumber) {
    if (project == 1) {
        if (receivedNumber == 1) {
            if (bootX > 0) {
                led.unplot(bootX, bootY)
                bootX += -1
                led.plot(bootX, bootY)
            }
        }
        if (receivedNumber == 2) {
            if (bootX < 4) {
                led.unplot(bootX, bootY)
                bootX += 1
                led.plot(bootX, bootY)
            }
        }
        if (receivedNumber == 3) {
            control.reset()
        }
    }
    if (project == 2) {
        if (receivedNumber == 0) {
            cheat = 1
            nummer = 1
        }
        if (receivedNumber == 1) {
            cheat = 1
            nummer = 6
        }
        if (receivedNumber == 3) {
            control2 = 1
            nummer = randint(1, 6)
            radio.sendNumber(nummer)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (project == 1) {
        if (bootX > 0) {
            led.unplot(bootX, bootY)
            bootX += -1
            led.plot(bootX, bootY)
        }
    }
    if (project == 2) {
        if (cheat == 0 && control2 == 0) {
            nummer = randint(1, 6)
            basic.showNumber(nummer)
        }
        if (cheat == 1) {
            basic.showNumber(nummer)
            cheat = 0
        }
        if (control2 == 1) {
            basic.showNumber(nummer)
            control2 = 0
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (project == 1) {
        if (bootX < 4) {
            led.unplot(bootX, bootY)
            bootX += 1
            led.plot(bootX, bootY)
        }
    }
})
let manX = 0
let manY = 0
let control2 = 0
let nummer = 0
let cheat = 0
let project = 0
let bootX = 0
let bootY = 0
radio.setGroup(10)
radio.setTransmitPower(7)
let score = 0
let game2 = 1
bootY = 4
bootX = 3
project = 0
let tijd = 0
let TekenBoot = 0
cheat = 0
nummer = 0
control2 = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && project == 0 && tijd == 0) {
        tijd = 1
        basic.showNumber(1)
        basic.pause(100)
        basic.clearScreen()
        project = 1
    }
    if (input.buttonIsPressed(Button.B) && project == 0 && tijd == 0) {
        tijd = 1
        basic.showNumber(2)
        basic.pause(100)
        basic.clearScreen()
        project = 2
    }
    if (project == 1) {
        if (TekenBoot == 0) {
            led.plot(bootX, bootY)
            TekenBoot = 1
        }
        while (game2 == 1) {
            manY = 0
            manX = randint(0, 4)
            while (manY < 4) {
                led.plot(manX, manY)
                basic.pause(500)
                led.unplot(manX, manY)
                manY += 1
            }
            if (!(bootX == manX)) {
                game.setScore(score)
                game.gameOver()
                game2 = 0
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                control.reset()
            } else {
                score += 1
            }
        }
    }
})
