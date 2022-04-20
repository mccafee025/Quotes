import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
      quotes:Quote[] = [
            new Quote(1, 'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.', 'Buddha', 1, 10),
            new Quote(2, 'Be happy for this moment. This moment is your life.', 'Omar Khayyam', 2, 5),
            new Quote(3, 'The more man meditates upon good thoughts, the better will be his world and the world at large.', 'Confucius', 4, 6),
            new Quote(4, 'When it is obvious that goals can’t be reached, don’t adjust the goals, but adjust the action steps.', 'Confucius', 5, 3),
            new Quote(5, 'Happiness is the feeling that power increases — that resistance is being overcome.', 'Friedrich Nietzsche', 5, 9),
            new Quote(6, 'The secret of happiness, you see is not found in seeking more, but in developing the capacity to enjoy less.', 'Socrates',10, 8),
      ];

      addNewQuote(quote:any){
            let quoteLength = this.quotes.length;
            quote.id = quoteLength+1;
            this.quotes.push(quote)
      }
      toggleDetails(index:any){
            this.quotes[index].showDescription = !this.quotes[index].showDescription;
      }
  constructor() { }

  ngOnInit(): void {
  }  
  showDesc(index:number) {
       this.quotes[index].showDescription=!this.quotes[index].showDescription
      
  }

}
