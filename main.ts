input.onButtonPressed(Button.A, function () {
    music.ringTone(northNoise)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    input.calibrateCompass()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    iFlag = 1
    basic.showNumber(north)
    basic.pause(2000)
    iFlag = 0
})
function sonner () {
    music.playTone(932, music.beat(BeatFraction.Whole))
    basic.pause(noise - northNoise)
}
let northNoise = 0
let iFlag = 0
let north = 0
let noise = 0
noise = 500
north = 0
iFlag = 0
input.calibrateCompass()
basic.forever(function () {
    if (iFlag == 0) {
        north = input.compassHeading()
        if (north <= 180) {
            northNoise = noise - noise / 180 * north
        } else {
            northNoise = noise / 180 * north - noise
        }
        led.plotBarGraph(
        northNoise,
        noise
        )
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        sonner()
    } else {
        music.stopAllSounds()
    }
})
