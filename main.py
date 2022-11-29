def on_forever():
    for y in range(6):
        for x in range(6):
            led.plot(x, y)
            led.unplot(x - 1, y)
            control.wait_micros(100000)
basic.forever(on_forever)