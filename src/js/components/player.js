export class Player {
  constructor(){
    this.element = document.createElement('div')
    this.element.className = 'Player';
    this.type = 'Player';
    this.cards = [];
  }
}
