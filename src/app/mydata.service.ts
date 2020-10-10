import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class MydataService {

  constructor() { }

  cars = ['ford', 'tata', 'nissan'];

  myData(){
    return "my data service";
  }
}
