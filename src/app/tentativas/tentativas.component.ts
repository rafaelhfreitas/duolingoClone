import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Heart } from 'app/shared/heart.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tries: number 

  public hearts: Heart[] = [
    new Heart(true),
    new Heart(true),
    new Heart(true)
  ]

  constructor() {
   }
   
   
  ngOnChanges(changes: SimpleChanges): void {
    if(this.tries !== this.hearts.length) {
      let index = this.hearts.length - this.tries
      this.hearts[index - 1].filled = false
    }
    
  }


  ngOnInit() {

  }

}
