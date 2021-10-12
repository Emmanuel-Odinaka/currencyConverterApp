import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  constructor(private httpClient: HttpClient) {}

  getCurrency(base, value): Observable<any> {
    return this.httpClient.get(
      `https://free.currconv.com/api/v7/convert?q=${base}_${value}&compact=ultra&apiKey=5fb20254c39a382b6992`
    );
  }
}
