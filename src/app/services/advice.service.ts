import { Injectable } from '@angular/core';
import { Advice } from '../model/Advice';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(private httpClient: HttpClient) { }

  getAdvice = () => {
    return this.httpClient.get('http://api.adviceslip.com/advice');
  };

};
