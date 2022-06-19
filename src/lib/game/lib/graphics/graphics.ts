// shims https://docs.oracle.com/javase/7/docs/api/java/awt/Graphics.html

import type Color from "./color";
import type Font from "./font";

class Graphics {
    canvas: any;
    ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d', { alpha: false }) as CanvasRenderingContext2D;
    }

    setColor(color: Color) {
        this.ctx.fillStyle = color.toCanvasStyle();
        this.ctx.strokeStyle = color.toCanvasStyle();
    }

    fillRect(x: number, y: number, width: number, height: number) {
        this.ctx.fillRect(x, y, width, height);
    }

    drawRect(x: number, y: number, width: number, height: number) {
        this.ctx.strokeRect(x, y, width, height);
    }

    setFont(font: Font) {
        this.ctx.font = font.toCanvasFont();
    }

    drawString(s: string, x: number, y: number) {
        this.ctx.fillText(s, x, y);
    }

    measureTextWidth(s: string) {
        return this.ctx.measureText(s).width;
    }

    drawImage(image: ImageData, x: number, y: number) {
        this.ctx.putImageData(image, x, y);
    }

    getImage(width: number, height: number) {
        return this.ctx.getImageData(0, 0, width, height);
    }
}

export default Graphics;
