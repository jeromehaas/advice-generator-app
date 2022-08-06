import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(private httpClient: HttpClient) { }

  getAdvice = () => {
    return this.httpClient.get('https://api.adviceslip.com/advice');
  };

};
