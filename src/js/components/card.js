import { createBackground } from '../services/createBackground' ;

export class card{
  constructor( card , number , color ){
    /// element of dom
    this.card = card ;
    /// this number of card
    this.number = number + 1 ;
    this.chageNumber();
    /// this color of card 
    this.color = color;
    this.colorNumber = null;
    this.changeColorNumber()
    /// add type if the card is special
    this.addtype();
    this.render();
  };
  changeColorNumber(){
    if ( this.color === 'red' )  this.colorNumber = 0 ;
    if ( this.color === 'yellow' ) this.colorNumber = 1 ;
    if ( this.color === 'blue' ) this.colorNumber = 2 ;
    if ( this.color === 'green' ) this.colorNumber = 3 ;
  }

  chageNumber(){
    /// us the number for recreate new number between 1 and 9 
    if ( this.number && ( this.number > 9 ) ) {
      if ( this.number >= 11 ) {
        this.number = this.number - 10 + 1 ;
      }if( this.number === 10 ) {
        this.number = this.number = 1 ;
      };
    }
  };

  render(){
    this.element = document.createElement('section');
    this.element.className = 'card';
    this.element.classList.add(`${this.color}__${this.number}`)

    // us the number for position of background 
    createBackground( this.element , this.number , this.colorNumber );
  
  };
  addtype(){
    if(this.card){

    }
  }
}
