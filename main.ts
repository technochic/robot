input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 8; index++) {
        strip.setBrightness(100)
        strip.show()
        music.setVolume(randint(150, 255))
        music.playTone(randint(250, 500), music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Eighth))
        strip.showColor(neopixel.rgb(randint(0, 100), randint(0, 100), randint(0, 100)))
        strip.show()
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
basic.forever(function () {
	
})
