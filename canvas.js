/* globals SETTINGS, Drawer */

const { Drawer } = require('./drawer.js');
const { SETTINGS } = require('./settings.js');

const Canvas = function(canvas, config) {
  this.canvas = canvas;
  
  this.ctx = canvas.getContext('2d');
  this.ctx.lineJoin = 'round';
  this.ctx.lineCap = 'round';
  this.ctx.fillStyle = 'white';
  this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  
  this.offset = {
    top:    { x: 0, y: 0 },
    bottom: { x: 250, y: 130 }
  };

  this.dragging = false;
  this.dragPosition = { x0: 0, y0: 0 };

  this.hoshii = config.hoshii;
  this.noalpha = config.noalpha;

  this.drawer = new Drawer(this.ctx);
}


Canvas.prototype.upperEndPosition = function() {
  return this.canvas.getBoundingClientRect().top + this.offset.bottom.y;
}

Canvas.prototype.lowerEndPosition = function() {
  return this.canvas.getBoundingClientRect().top + (this.canvas.height - 10);
}

Canvas.prototype.redrawTop = function (text, isRainbow) {
  const x     = 70;
  const y     = 100;
  const order = this.noalpha ? 'white' : 'transparent';
  
  if (isRainbow) {
    this.drawer.redrawTop_rainbow(text, x, y, order);
  }else{
    this.drawer.redrawTop(text, x, y, order);
  }

  if (this.hoshii === true) {
    this.redrawImage();
  } else {
    //this.redrawBottom(text, isRainbow);
  }
}

Canvas.prototype.redrawBottom = function (txt, offsetX, isRainbow) {
  const text  = txt.replace(/！/, `!`);
  const x     = (offsetX || this.offset.bottom.x) + 70;
  const y     = this.offset.bottom.y + 100;
  const order = this.noalpha ? 'white' : 'transparent';
  if (isRainbow) {
    this.drawer.redrawBottom_rainbow(text, x, y, order);
  }else{
    this.drawer.redrawBottom(text, x, y, order);
  }
}

Canvas.prototype.redrawImage = function(offsetX) {
  const x     = (offsetX || this.offset.bottom.x) + 70;
  const y     = this.offset.bottom.y;
  const order = this.noalpha ? 'white' : 'transparent';
  this.drawer.redrawImage(x, y, order);
}

Canvas.prototype.save = function() {
  this.drawer.save();
}

Canvas.prototype.createBuffer = function (t, callback, q) {
  this.drawer.createBuffer(t, callback, q);
}

module.exports = {Canvas}
