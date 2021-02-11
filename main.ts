let Parlaklik = 255
basic.forever(function () {
    if (Parlaklik < 0) {
        Parlaklik += 1
    }
    led.plotBrightness(0, 0, 255)
})
