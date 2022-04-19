import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
      quotes:Quote[] = [
            {id:1, name:'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.'},
            {id:2, name:'Be happy for this moment. This moment is your life.'},
            {id:3, name:'The more man meditates upon good thoughts, the better will be his world and the world at large.'},
            {id:4, name:'When it is obvious that goals can’t be reached, don’t adjust the goals, but adjust the action steps.'},
            {id:5, name:'Happiness is the feeling that power increases — that resistance is being overcome.'},
            {id:6, name:'The secret of happiness, you see is not found in seeking more, but in developing the capacity to enjoy less.'},
      ];
  constructor() { }

  ngOnInit(): void {
  }

}
