import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public gameRunning: boolean = true
  public typeEnding: string
  
  public endGame(type: string): void {
    console.log(type);
    this.gameRunning = false;
    this.typeEnding = type;
  }

  public restartGame(): void {
    this.gameRunning = true;
    this.typeEnding = undefined;
  }
}
