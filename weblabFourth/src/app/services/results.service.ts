import {Injectable, OnInit} from '@angular/core';
import {Result} from "../models/result";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ResultsService {
    results: Result[] = []

    constructor(private http: HttpClient) {
        this.getAll()
    }

    getAll(): void {
        const response = this.http.get<Result[]>(environment.apiUrl)
        response.subscribe((resp) => {
            this.results = resp
            console.log(resp) // todo remove
        })
    }

    clearAll(): void {
        const response = this.http.delete(environment.apiUrl)
        response.subscribe(() => {
            this.results = []
            console.log("Clear") // todo remove
        })
    }

}
