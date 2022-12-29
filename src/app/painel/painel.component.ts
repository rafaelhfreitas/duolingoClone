import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Phrase } from 'app/shared/phrase.model';
import { PHRASES} from './phrases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public phrases: Phrase[] = PHRASES
  public instruction: string = 'Traduza a frase'
  public answer: string = ''
  public round: number = 0
  public phraseRound: Phrase 
  public progress: number = 0
  public tries: number = 3

  @Output() public endGame: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.updateRound()
   }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  public updateAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value 
  }

  public checkAnswer(): void {
  
    if(this.answer == this.phraseRound.phraseBr) {
        this.round++
        this.progress = this.progress + (100/ this.phrases.length)
        if(this.round === 4){
          this.endGame.emit('win')
          //alert('Você ganhou o jogo !')
        }
        this.updateRound()

    } else {
        this.tries--
        if (this.tries === -1) {
          this.endGame.emit('lose')
          //alert("Você perdeu todas tentativas !!!")
        }
    }
    
  }

  public updateRound() {
    this.phraseRound = this.phrases[this.round]
    this.answer = ''

  }

}
