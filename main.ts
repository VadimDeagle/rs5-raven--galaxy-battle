namespace SpriteKind {
    export const Super = SpriteKind.create()
    export const Hit = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    sprite.destroy(effects.fire, 500)
    myDart = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . 2 . . . . . . 2 . . . . . . 
        4 4 5 5 5 5 5 5 5 5 5 5 5 2 2 . 
        . . 2 . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    Cruise = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . 2 . . . . . . 2 . . . . . . 
        4 4 5 5 5 5 5 5 5 5 5 5 5 2 2 . 
        . . 2 . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    Cruise.follow(Alien, 300)
    myDart.follow(Alien, 300)
    myDart.lifespan = 500
    Cruise.lifespan = 500
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Laser = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, RS5_Raven, 3000, 0)
    Laser.lifespan = randint(500, 2500)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    sprite.destroy(effects.fire, 500)
    myDart = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . 2 . . . . . . 2 . . . . . . 
        4 4 5 5 5 5 5 5 5 5 5 5 5 2 2 . 
        . . 2 . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    myDart = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . 2 . . . . . . 2 . . . . . . 
        4 4 5 5 5 5 5 5 5 5 5 5 5 2 2 . 
        . . 2 . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    myDart = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . 2 . . . . . . 2 . . . . . . 
        4 4 5 5 5 5 5 5 5 5 5 5 5 2 2 . 
        . . 2 . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    Cruise = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . 2 . . . . . . 2 . . . . . . 
        4 4 5 5 5 5 5 5 5 5 5 5 5 2 2 . 
        . . 2 . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    Cruise = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . 2 . . . . . . 2 . . . . . . 
        4 4 5 5 5 5 5 5 5 5 5 5 5 2 2 . 
        . . 2 . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    Cruise = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . 2 . . . . . . 2 . . . . . . 
        4 4 5 5 5 5 5 5 5 5 5 5 5 2 2 . 
        . . 2 . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    Cruise = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . 2 . . . . . . 2 . . . . . . 
        4 4 5 5 5 5 5 5 5 5 5 5 5 2 2 . 
        . . 2 . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    Cruise.setVelocity(200, 50)
    myDart.setVelocity(200, -50)
    Cruise.follow(Alien, 300)
    myDart.follow(Alien, 300)
    myDart.lifespan = 500
    Cruise.lifespan = 500
})
info.onLifeZero(function () {
    game.splash("Shout out to Cosmos")
    game.over(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    scene.cameraShake(randint(1, 25), 500)
    Missile = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 . . . . . . . . . . . 
        . . 4 4 5 5 5 5 2 . . . . . . . 
        . . . . 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Hit)
    Missile.setPosition(randint(0, 25), randint(0, 115))
    Missile.setVelocity(200, randint(-10, 10))
    Missile.follow(Alien, info.score() * 2)
    Missile.lifespan = randint(info.score() * 0.1, info.score() * 15)
    Missile.setFlag(SpriteFlag.DestroyOnWall, true)
})
sprites.onOverlap(SpriteKind.Hit, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 500)
    otherSprite.destroy(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(2)
    otherSprite.destroy(effects.hearts, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 100)
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
    info.changeLifeBy(0.5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
    info.changeLifeBy(-1)
})
let mySprite: Sprite = null
let Missile: Sprite = null
let Laser: Sprite = null
let Alien: Sprite = null
let Cruise: Sprite = null
let myDart: Sprite = null
let RS5_Raven: Sprite = null
game.splash("Welcome to RS5 Raven: Galaxy Battle")
game.splash("Use arrow keys to move")
game.splash("Space for laser", "Hold space for missiles")
RS5_Raven = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 2 2 . . . . 
    . . . . . . . . 2 2 . . . . . . 
    . . . . . 8 9 2 2 2 2 . . . . . 
    . . . . . . . . 2 2 2 2 2 . . . 
    . . . . 8 9 2 2 2 2 2 9 9 2 . . 
    . . . . . . . . 2 2 2 2 2 . . . 
    . . . . . 8 9 2 2 2 2 . . . . . 
    . . . . . . . . 2 2 . . . . . . 
    . . . . . . . 2 2 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
RS5_Raven.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(5)
controller.moveSprite(RS5_Raven, 200, 200)
game.onUpdateInterval(30000, function () {
    mySprite = sprites.create(sprites.builtin.coin0, SpriteKind.Food)
})
game.onUpdateInterval(500, function () {
    Alien = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . 5 5 2 2 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Alien.setVelocity(-25 * (game.runtime() / 1000 / 60) + -10, 0)
    Alien.setPosition(180, randint(0, 120))
    Alien.lifespan = randint(1000, 5000)
})
