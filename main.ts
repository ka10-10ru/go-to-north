input.onButtonPressed(Button.A, function () {
    music.ringTone(northNoise)
})
input.onButtonPressed(Button.B, function () {
	
})
let northNoise = 0
let noise = 2000
let north = 0
input.calibrateCompass()
basic.forever(function () {
    north = input.compassHeading()
    if (north <= 180) {
        northNoise = noise - noise / 180 * north
    } else {
        northNoise = noise / 180 * (north - noise)
    }
    led.plotBarGraph(
    northNoise,
    noise
    )
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.ringTone(northNoise)
    } else {
        music.stopAllSounds()
    }
})
