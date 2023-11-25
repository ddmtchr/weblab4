import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Point} from "../models/point";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class FormDataService {
    xInput: number = 0;
    yInput: number = 0;
    rInput = new BehaviorSubject<number>(3)
    rInput$ = this.rInput.asObservable()

    constructor(private http: HttpClient) {
    }

    submit(): Observable<Point> | null {
        if (this.rInput.getValue() < 0) return null
        const point: Point = {
            x: this.xInput,
            y: this.yInput,
            r: this.rInput.getValue()
        }
        return this.http.post<Point>(environment.apiUrl, point)
    }

    setValues(x: number, y: number, r: number): void {
        this.xInput = x
        this.yInput = y
        if (r !== this.rInput.getValue()) this.rInput.next(r)
    }
}
