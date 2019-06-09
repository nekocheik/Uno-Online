import { cards } from './cards' ;
import { pickaxe } from './pickaxe';
import { Player } from './player';

// import { } from '';

export class Table{

  constructor(){
    this.element = document.querySelector('.table')
    this.objectCards = new cards(this);
    this.pickaxe = new pickaxe( this.objectCards.cards );
    this.player = new Player();
    this.upland = this.getUpland();
    this.render();
    console.log(this)
  }

  render(){
    this.element.appendChild( this.pickaxe.element );
    this.element.appendChild( this.player.element );
    this.distributionOfcard();
    this.element.appendChild( this.upland.element )
    console.log(this.upland.element)
  }

  distributionOfcard(){
    let numberCardsAtStart = 9 ;
    for (let i = 0; i <  numberCardsAtStart ; i++) {
      this.pickaxe.cards[i].owner = this.player ;
     this.player.element.append( this.pickaxe.cards[i].element ) ;
    }
  };

  getUpland(){
    /// the center of game 
    const Upland = {
     element :  document.createElement('div'),
    }
    Upland.element.className = 'upland';
    return Upland
  }

}