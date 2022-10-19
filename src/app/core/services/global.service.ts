import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  /** Permet d'avoir un nombre de aléatoire entre un minimum et un maximun */
  randomIntFromInterval(min:number, max:number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
