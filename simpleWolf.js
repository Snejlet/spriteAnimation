var wolf = {
    x:50,
    y:50,
    ready:false,
    imageUrl: "Assets/howl.png",
    baseImage: new Image(),
    draw: function(ctx) {
        var baseImage = this.baseImage;

        ctx.drawImage(baseImage, this.x, this.y);
    },
    tick: function(canvas) {
        console.log("wolf tick does nothing");
    },
    initialise: function() {
        this.baseImage.onload = function() {
            this.ready = true;
        };
        this.baseImage.src = this.imageUrl;
    }
}
wolf.initialise();