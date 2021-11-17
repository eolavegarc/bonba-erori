input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        Bonba.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
})
let Bonba: game.LedSprite = null
Bonba = game.createSprite(2, 0)
