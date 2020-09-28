sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    statusbar.value += 10
    pause(500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -10
    pause(500)
})
let statusbar: StatusBarSprite = null
let mouse = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . d d d d . . d d d d . . . . . 
    . d d d d . . d d d d d . . . . 
    d d d d d . . d d d d d . . . . 
    d d d d d d d d d d d d . . . . 
    . d d f d d d d f d d . . . . . 
    . . d d d b b d d d . . . . . . 
    . . . d d f f d d d . . . d . . 
    . . . c c c c c c c . . d d . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d . . . . . 
    . . . d d d d d d d d . . . . . 
    . . . d . . . d . . d . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mouse)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mouse)
let cat = sprites.create(img`
    . . . . . . . . . . . . . . 
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e b f b . 
    f d d f d d f d d f f d f . 
    f b d d b b d d 2 b f d f . 
    . f 2 2 2 2 2 2 d b d b f . 
    . f d d d d d d d f f f . . 
    . f d b d f f f d f . . . . 
    . . f f f f . . f f . . . . 
    `, SpriteKind.Enemy)
let cheese = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 5 5 d . . . 
    . . . . 5 5 5 5 5 5 5 5 5 d . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 d . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 d . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 d . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 d . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 d . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 d . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 d . 
    . . . . 5 5 5 5 5 5 5 5 5 d . . 
    . . . . . 5 5 5 5 5 5 5 d . . . 
    . . . . . . d d d d d d . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
game.onUpdateInterval(2000, function () {
    cheese.setPosition(randint(0, 180), randint(110, 0))
})
