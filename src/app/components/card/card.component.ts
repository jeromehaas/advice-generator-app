import { Component, Input, OnInit } from '@angular/core';
import { AdviceService } from 'src/app/services/advice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  advice: any;
  elements: any;

  constructor(private adviceService: AdviceService) {
  }

  ngOnInit(): void {
    this.advice = { slip: { id: null, advice: '' } };
    this.elements = {
      card: document.querySelector('.card'),
      dice: document.querySelector('.card__dice .dice__cube'),
      advice: document.querySelector('.card__advice'),
      heading: document.querySelector('.card__heading'),
    };
    this.getAdvice();
  };

  generateRandomDicePosition = () => {
    const values = ['-540', '-450', '-360', '-270', '-180', '-90', '0', '90', '180', '270', '360', '450', '540']
    const res = [];
    for (let i = 0; i < 3; i++) { res.push(values[Math.floor(Math.random() * values.length )]) };
    return res;
  }
  
  playDiceAnimation = () => {
    const randomDicePosition = this.generateRandomDicePosition();
    this.elements.dice.style.transform = `rotateX(${randomDicePosition[0]}deg) rotateY(${randomDicePosition[1]}deg)`;
  };
  

  playTextAnimation = () => {
    this.elements.advice.style.opacity = 0;
    this.elements.heading.style.opacity = 0;
    setTimeout(() => { 
      this.elements.advice.style.opacity = 1 
      this.elements.heading.style.opacity = 1;
    }, 1000 )
  }

  getAdvice = () => {
    this.playDiceAnimation();
    this.playTextAnimation();
    setTimeout( async () => {
      this.advice = await this.adviceService.getAdvice().subscribe((data) => {
        this.advice = data;
      });
    }, 1000);

  }

}
