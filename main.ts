let strip: neopixel.Strip = null
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
    strip.showBarGraph(0, 8)
})
basic.forever(function () {
	
})
