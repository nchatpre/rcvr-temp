radio.onReceivedNumber(function (receivedNumber) {
    Celcius = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . # #
        `)
    basic.pause(200)
    serial.writeValue("Celcius", receivedNumber)
})
let Celcius = 0
basic.showString("RCVR")
radio.setGroup(37)
basic.forever(function () {
	
})
