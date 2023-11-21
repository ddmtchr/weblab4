import { Component } from '@angular/core';
import {ResultsService} from "../../services/results.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor(public resultsService: ResultsService) {
  }

}
