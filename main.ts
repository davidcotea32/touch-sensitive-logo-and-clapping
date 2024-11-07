input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("This is a test")
    basic.clearScreen()
    music.play(music.stringPlayable("C5 B A A A B - C5 ", 120), music.PlaybackMode.UntilDone)
})
basic.showString("if you long press the logo it will show a string")
basic.clearScreen()
basic.showString("if you do a loud sound it will show ”:)”")
basic.clearScreen()
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
