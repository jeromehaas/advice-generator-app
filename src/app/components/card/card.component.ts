import { Component, Input, OnInit } from '@angular/core';
import { AdviceService } from 'src/app/services/advice.service';
import { Advice } from 'src/app/model/Advice';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  advice: any;

  constructor(private adviceService: AdviceService) {
  }

  ngOnInit(): void {
    this.advice = { slip: { id: null, advice: '' } };
    this.getAdvice();
  };

  getAdvice = async () => {
    // this.advice = {
    //   slip: {
    //     id: 4,
    //     advice: 'heheh'
    //   }
    // }
    this.advice = await (await this.adviceService.getAdvice()).subscribe((data) => {
      this.advice = data;
    });
    console.log(this.advice);

    // console.log(this.advice);
  }

}
