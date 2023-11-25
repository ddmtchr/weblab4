import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {FormDataService} from "../../services/form-data.service";
import {ResultsService} from "../../services/results.service";
import {DrawingService} from "../../services/drawing.service";


@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements AfterViewInit {
    @ViewChild('graphCanvas') canvasRef!: ElementRef;

    constructor(private formDataService: FormDataService,
                private resultsService: ResultsService,
                private drawingService: DrawingService) {
    }

    ngAfterViewInit(): void {
        this.drawingService.init(this.canvasRef!.nativeElement)

        this.resultsService.getAll().subscribe(() => {
            this.drawingService.drawGraph()
            this.drawingService.drawAllPoints(this.resultsService.results)
        })

        this.formDataService.rInput$.subscribe(r => {
            if (r >= 0) {
                this.drawingService.currentR = r
                this.drawingService.drawGraph()
                this.drawingService.drawAllPoints(this.resultsService.results)
            }
        })
    }

    addByClick(event: MouseEvent) {
        const scaledX = this.drawingService.scaleX(event.x)
        const scaledY = this.drawingService.scaleY(event.y)

        this.formDataService.setValues(scaledX, scaledY, this.formDataService.rInput.getValue())
        const response = this.formDataService.submit()
        this.resultsService.handleResponse(response)
    }
}
