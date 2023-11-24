import {Component, OnInit} from '@angular/core';
import {FormDataService} from "../../services/form-data.service";
import {ResultsService} from "../../services/results.service";
import {DrawingService} from "../../services/drawing.service";
import {
    logBuilderStatusWarnings
} from "@angular-devkit/build-angular/src/builders/browser-esbuild/builder-status-warnings";

@Component({
    selector: 'app-main-form',
    templateUrl: './main-form.component.html',
    styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
    xInput: number = 0;
    yInput: number = 0;
    rInput: number = 3;

    constructor(private formDataService: FormDataService,
                private resultsService: ResultsService,
                private drawingService: DrawingService) {
    }

    ngOnInit(): void {
    }

    changeField() {
        this.formDataService.setValues(this.xInput, this.yInput, this.rInput)
    }

    submit() {
        this.formDataService.setValues(this.xInput, this.yInput, this.rInput)

        const response = this.formDataService.submit()
        if (response) {
            response.subscribe((resp) => {
                console.log('Point submitted successfully:', resp) // todo remove
                this.resultsService.getAll().subscribe(() => {
                    this.drawingService.drawGraph()

                    for (const point of this.resultsService.results) {
                        this.drawingService.drawPoint(point)
                    }
                })

                // console.log("Drawing...")
                // this.drawingService.drawGraph(this.drawingService.currentR)
                //
                // for (const point of this.resultsService.results) {
                //     this.drawingService.drawPoint(point)
                // }

            })
        }
        //todo

    }

    clear() {
        this.resultsService.clearAll()
        this.drawingService.drawGraph()
    }
}
