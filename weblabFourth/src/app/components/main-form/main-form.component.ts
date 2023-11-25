import {Component} from '@angular/core';
import {FormDataService} from "../../services/form-data.service";
import {ResultsService} from "../../services/results.service";
import {DrawingService} from "../../services/drawing.service";

@Component({
    selector: 'app-main-form',
    templateUrl: './main-form.component.html',
    styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent {
    xInput: number = 0;
    yInput: number = 0;
    rInput: number = 3;

    constructor(private formDataService: FormDataService,
                private resultsService: ResultsService,
                private drawingService: DrawingService) {
    }

    changeFields() {
        this.formDataService.setValues(this.xInput, this.yInput, this.rInput)
    }

    submit() {
        this.formDataService.setValues(this.xInput, this.yInput, this.rInput)
        const response = this.formDataService.submit()
        this.resultsService.handleResponse(response)
    }

    clear() {
        this.resultsService.clearAll()
        this.drawingService.drawGraph()
    }
}
