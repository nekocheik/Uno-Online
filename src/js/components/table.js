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
  }

  render(){
    this.element.appendChild( this.pickaxe.element );
    this.element.appendChild( this.player.element );
    this.distributionOfcard();
    this.element.appendChild( this.upland.element )
  }

  distributionOfcard(){
    let numberCardsAtStart = 9 ;
    for (let i = 0; i <  numberCardsAtStart ; i++) {
     this.pickaxe.cards[i].owner = this.player ;
     this.player.element.append( this.pickaxe.cards[i].element ) ;
     this.player.cards[i] = this.pickaxe.cards[i] ;
     //// remove aftet switch 
     this.pickaxe.cards.splice(i,1)
    }
    console.log(this)
  };

  getUpland(){
    /// the center of game 
    const Upland = {
     element :  document.createElement('div'),
     cards : [] ,
    }
    Upland.element.className = 'upland';
    return Upland
  }

}