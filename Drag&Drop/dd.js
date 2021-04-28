/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var config = {
    type: Phaser.AUTO,
    width: 500,
    height: 500,
    parent: 'dd',
    backgroundColor: 'black',
    scene: {
        preload: preload,
        create: create
    }
};
var game = new Phaser.Game(config);
function preload ()
{
    this.load.image('mario', 'mario.png');
    this.load.image('background','background.png');
    this.load.image('logo','logo.png');
}
function create ()
{
    this.add.image(0, 0, 'background').setOrigin(0, 0);
    var logo = this.add.sprite(250,100,'logo');
    logo.setScale(0.4);
    
    var mario = this.add.sprite(50, 380, 'mario');
    mario.setScale(0.5);

    mario.setInteractive();

    this.input.setDraggable(mario);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });
}
