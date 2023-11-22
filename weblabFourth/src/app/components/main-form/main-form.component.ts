import {Component, OnInit} from '@angular/core';
import {FormDataService} from "../../services/form-data.service";
import {ResultsService} from "../../services/results.service";

@Component({
    selector: 'app-main-form',
    templateUrl: './main-form.component.html',
    styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
    xInput: number = 0;
    yInput: number = 0;
    rInput: number = 3;

    constructor(private formDataService: FormDataService, private resultsService: ResultsService) {
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
                console.log('Point submitted successfully:', resp);
                this.resultsService.getAll();

            })
        }
        //todo

    }

    clear() {
        this.resultsService.clearAll()
    }
}
