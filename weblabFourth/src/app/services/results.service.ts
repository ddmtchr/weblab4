import { Injectable } from '@angular/core';
import {Result} from "../models/result";

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  results: Result[] = [{
    x: 3.2,
    y: -2.94,
    r: 4.5,
    result: false,
    execTime: 3,
    execAt: "20-11-2023 16:16"
  }, {
    x: 3.2,
    y: -2.94,
    r: 4.5,
    result: false,
    execTime: 3,
    execAt: "20-11-2023 16:16"
  }, {
    x: 3.2,
    y: -2.94,
    r: 4.5,
    result: false,
    execTime: 3,
    execAt: "20-11-2023 16:16"
  }]

  constructor() { }
}
