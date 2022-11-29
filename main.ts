basic.forever(function () {
    for (let y = 0; y <= 5; y++) {
        for (let x = 0; x <= 5; x++) {
            led.plot(x, y)
            led.unplot(x - 1, y)
            control.waitMicros(100000)
        }
    }
})
