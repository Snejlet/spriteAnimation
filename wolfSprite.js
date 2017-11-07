var wolf = {
    x: 60,
    y: 60,
    w: 80,
    h: 80,
    currentSprite: {col:1,row:4},
    ready: false,
    frameCount: 0,
    speedFactor: 4,
    sprites: [],
    imageUrl: "Assets/wolfsheet1.png",
    baseImage: new Image(),
    draw: function (ctx) {

        if (this.ready) {
            ctx.putImageData(this.sprites[this.currentSprite.row][this.currentSprite.col], this.x, this.y);
        }
    },
    tick: function (canvas) {
        if (this.frameCount-- <= 0) {
            this.frameCount = this.speedFactor;
            this.currentSprite.col++;

            if (this.currentSprite.col == 5) {
                this.currentSprite.col = 0;
            }
        }
    },
    initialise: function () {
        this.baseImage.onload = function () {
            var tempCanvas = document.createElement('canvas');
            tempCanvas.width = 640; //same dimensions as the sheet itself.
            tempCanvas.height = 384;
            var tempCtx = tempCanvas.getContext("2d");
            console.log("in onload image "+this);
            tempCtx.drawImage(this, 0, 0); //draw onto the temp canvas

            var spritew = 64; //same dimensions as the individual sprites on the sheet.
            var spriteh = 32;

            for (var row = 0; row < 12; row++) {
                wolf.sprites[row] = []; //initialises the array into the array
                for (var col = 0; col < 5; col++) {
                    var spriteX = 320 + col * spritew;
                    var spriteY = row * spriteh;
                    wolf.sprites[row][col] = tempCtx.getImageData(spriteX, spriteY, spritew, spriteh);
                }
            }
            wolf.ready = true;
        };
        this.baseImage.src = this.imageUrl;
    }
};

wolf.initialise();