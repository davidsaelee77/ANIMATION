
class Animation
{

	constructor (spriteSheet, frameWidth, frameHeight, sheetWidth,
		frameDuration, frames, loop, scale) {
	this.spriteSheet = spriteSheet;
	this.frameWidth = frameWidth;
	this.frameDuration = frameDuration;
	this.frameHeight = frameHeight;
	this.sheetWidth = sheetWidth;
	this.frames = frames;
	this.totalTime = frameDuration * frames;
	this.elapsedTime = 0;
	this.loop = loop;
	this.scale = scale;
}


	drawFrame(tick, ctx, x, y) {
		this.elapsedTime += tick;
		if (this.elapsedTime > this.totalTime) {
			this.elapsedTime = 0;
		}

		var frame = this.currentFrame();
		var xindex = 0;
		var yindex = 0;
		xindex = frame % this.sheetWidth;
		yindex = Math.floor(frame / this.sheetWidth);

		ctx.drawImage(this.spriteSheet, xindex * this.frameWidth, yindex
				* this.frameHeight, 
		this.frameWidth, this.frameHeight, x, y, this.frameWidth * this.scale,
				this.frameHeight * this.scale);
	};




currentFrame() {
	return Math.floor(this.elapsedTime / this.frameDuration);
};

isDone() {
	return (this.elapsedTime >= this.totalTime);
};
}

