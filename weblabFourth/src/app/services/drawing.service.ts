import {Injectable} from '@angular/core';
import {Result} from "../models/result";

@Injectable({
  providedIn: 'root'
})
export class DrawingService {
  division: number = 5
  currentR: number = 3
  canvas!: HTMLCanvasElement
  ctx!: CanvasRenderingContext2D
  halfWidth: number = 0
  halfHeight: number = 0
  fullScalePx: number = 0
  canvasFont: string = ''

  constructor() {
  }

  init(c: HTMLCanvasElement): void {
    this.canvas = c
    this.ctx = this.canvas.getContext("2d")!;
    this.halfWidth = this.canvas.width / 2
    this.halfHeight = this.canvas.height / 2
    this.fullScalePx = (this.canvas.width * 0.5) - 25 - (((this.canvas.width * 0.5) - 25) % 25) // magic (number between HW - 25 and HW - 50) divisible by 25
    this.canvasFont = '16px sans-serif'
    this.ctx.translate(this.halfWidth, this.halfHeight)
    this.ctx.scale(1, -1)
  }

  drawAllPoints(results: Result[]) {
    for (const point of results) {
      this.drawPoint(point)
    }
  }

  drawPoint(result: Result): void {
    const scaledX = result.x * this.fullScalePx / this.division
    const scaledY = result.y * this.fullScalePx / this.division
    this.ctx.fillStyle = result.result ? '#080' : '#b00'
    this.ctx.beginPath()
    this.ctx.moveTo(scaledX, scaledY)
    this.ctx.arc(scaledX, scaledY, 2.5, 0, 2 * Math.PI, true)
    this.ctx.closePath()
    this.ctx.fill()
  }

  drawGraph() {
    this.ctx.clearRect(-this.halfWidth, -this.halfHeight, this.canvas.width, this.canvas.height)
    this.drawAxis()
    this.drawShapes()
  }

  scaleX(x: number) {
    const canvasEdgeX = Math.round(this.canvas.getBoundingClientRect().left)
    return +(((x - canvasEdgeX - this.halfWidth) * this.division / this.fullScalePx).toFixed(2))
  }

  scaleY(y: number) {
    const canvasEdgeY = Math.round(this.canvas.getBoundingClientRect().top)
    return +((-(y - canvasEdgeY - this.halfHeight) * this.division / this.fullScalePx).toFixed(2))
  }

  private drawShapes() {
    const r = this.fullScalePx / 5 * this.currentR
    let x1 = -r
    let y1 = 0
    let x2 = 0
    let y2 = 0
    let x3 = 0
    let y3 = r / 2
    this.ctx.fillStyle = '#aaaacc80' /* getComputedStyle(document.body).getPropertyValue('--canvas-shapes-color') todo */

    this.drawTriangle(x1, y1, x2, y2, x3, y3)
    this.drawCircleArc(0, 0, r, -Math.PI / 2, 0, false)
    this.drawRectangle(-r, 0, r, -r / 2)
  }

  private drawTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
    this.ctx.beginPath()
    this.ctx.moveTo(x1, y1)
    this.ctx.lineTo(x2, y2)
    this.ctx.lineTo(x3, y3)
    this.ctx.closePath()
    this.ctx.fill()
  }

  private drawCircleArc(centerX: number, centerY: number, r: number, startAngle: number, endAngle: number, counterclockwise: boolean) {
    this.ctx.beginPath()
    this.ctx.moveTo(centerX, centerY)
    this.ctx.arc(centerX, centerY, r, startAngle, endAngle, counterclockwise)
    this.ctx.closePath()
    this.ctx.fill()
  }

  private drawRectangle(x: number, y: number, width: number, height: number) {
    this.ctx.beginPath()
    this.ctx.rect(x, y, width, height)
    this.ctx.closePath()
    this.ctx.fill()
  }

  private drawAxis() {
    this.ctx.fillStyle = 'black'/* getComputedStyle(document.body).getPropertyValue('--canvas-axis-color') todo */
    this.ctx.strokeStyle = 'black' /* getComputedStyle(document.body).getPropertyValue('--canvas-axis-color') todo */
    this.ctx.font = this.canvasFont

    this.drawHorizontalAxis()
    this.drawVerticalAxis()

    for (let i = 1; i <= this.division; i++) {
      this.drawVerticalStroke(this.fullScalePx / this.division * (-i), 0, '-' + i)
      this.drawVerticalStroke(this.fullScalePx / this.division * i, 0, String(i))
      this.drawHorizontalStroke(0, this.fullScalePx / this.division * (-i), '-' + i)
      this.drawHorizontalStroke(0, this.fullScalePx / this.division * i, String(i))
    }
  }

  private drawVerticalAxis() {
    this.ctx.beginPath()
    this.ctx.moveTo(0, -this.halfHeight)
    this.ctx.lineTo(0, this.halfHeight)
    this.ctx.lineTo(-3, this.halfHeight - 10)
    this.ctx.lineTo(3, this.halfHeight - 10)
    this.ctx.lineTo(0, this.halfHeight)
    this.ctx.stroke()
    this.ctx.fill()
    this.ctx.scale(1, -1)
    this.ctx.textAlign = 'left'
    this.ctx.fillText('Y', -17, -this.halfHeight + 14)
    this.ctx.scale(1, -1)
  }

  private drawHorizontalAxis() {
    this.ctx.beginPath()
    this.ctx.moveTo(-this.halfWidth, 0)
    this.ctx.lineTo(this.halfWidth, 0)
    this.ctx.lineTo(this.halfWidth - 10, 3)
    this.ctx.lineTo(this.halfWidth - 10, -3)
    this.ctx.lineTo(this.halfWidth, 0)
    this.ctx.stroke()
    this.ctx.fill()
    this.ctx.scale(1, -1)
    this.ctx.textAlign = 'left'
    this.ctx.fillText('X', this.halfWidth - 12, 20)
    this.ctx.scale(1, -1)
  }

  private drawVerticalStroke(x: number, y: number, text: string) {
    this.ctx.beginPath()
    this.ctx.moveTo(x, y + 3)
    this.ctx.lineTo(x, y - 3)
    this.ctx.stroke()
    this.ctx.scale(1, -1)
    this.ctx.textAlign = 'center'
    this.ctx.fillText(text, x, y + 20)
    this.ctx.scale(1, -1)
  }

  private drawHorizontalStroke(x: number, y: number, text: string) {
    this.ctx.beginPath()
    this.ctx.moveTo(x + 3, y)
    this.ctx.lineTo(x - 3, y)
    this.ctx.stroke()
    this.ctx.scale(1, -1)
    this.ctx.textAlign = 'right'
    this.ctx.fillText(text, x - 5, -y + 5)
    this.ctx.scale(1, -1)
  }
}
