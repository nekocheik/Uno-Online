import { cards } from './cards' ;
import { pickaxe } from './pickaxe';
import { Player } from './player';

export class Table{
  constructor(){
    this.element = document.querySelector('.table')
    this.objectCards = new cards();
    this.pickaxe = new pickaxe( this.objectCards.cards );
    this.player = new Player();
    this.render();
  }
  render(){
    this.element.appendChild( this.pickaxe.element )
    this.element.appendChild( this.player.element )
    this.distributionOfcard();
  }

  distributionOfcard(){
    let numberCardsAtStart = 9 ;
    for (let i = 0; i <  numberCardsAtStart ; i++) {
      console.log(this.pickaxe.cards[i])
     this.player.element.append( this.pickaxe.cards[i].element ) ;
    }
  }

}