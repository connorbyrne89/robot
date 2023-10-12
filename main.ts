sphero.wake()
sphero.resetYaw()
sphero.setAllLeds(255, 0, 255)
let heading = 0
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) >= 400) {
        sphero.stop(heading)
        music.play(music.stringPlayable("- - - - - - - - ", 40), music.PlaybackMode.UntilDone)
        basic.pause(2000)
    } else if (pins.analogReadPin(AnalogPin.P0) >= 25) {
        sphero.drive(50, heading)
    } else {
        heading = heading + 10
        sphero.stop(heading)
    }
    basic.pause(200)
})
