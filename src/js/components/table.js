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
    
    //  initialisation of upland
    this.upland.element.appendChild( this.pickaxe.cards[0].element )
    this.upland.cards[0] = this.pickaxe.cards[0];
    this.upland.main = this.pickaxe.cards[0];
    this.pickaxe.cards.splice( 0 , 1 )
    
    
    console.log(this)
  };
  
  getUpland(){
    /// the center of game 
    const Upland = {
      element :  document.createElement('div'),
      cards : [] ,
      main : null ,
      chageMain : function ( card ){
        this.main = this.cards[ this.cards.length - 1 ] ;
      },
      setCard( card ){
        this.cards.push(card)
        this.main = card ;
        console.log(this.main)
      },
    };

    Upland.element.className = 'upland';
    return Upland
  }
  
}
