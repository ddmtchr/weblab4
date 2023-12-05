import {Injectable} from '@angular/core';
import {Result} from "../models/result";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Point} from "../models/point";
import {DrawingService} from "./drawing.service";

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  results: Result[] = []

  constructor(private http: HttpClient,
              private drawingService: DrawingService) {
  }

  handleResponse(response: Observable<Point> | null) {
    if (response) {
      response.subscribe(() => {
        this.getAll().subscribe(() => {
          this.drawingService.drawGraph()
          this.drawingService.drawAllPoints(this.results)
        })
      })
    }
  }

  getAll() {
    const response = this.http.get<Result[]>(environment.apiUrl)
    response.subscribe((resp) => {
      this.results = resp
    })
    return response
  }

  clearAll(): void {
    const response = this.http.delete(environment.apiUrl)
    response.subscribe(() => {
      this.results = []
    })
  }
}
