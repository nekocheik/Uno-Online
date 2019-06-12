import { createBackground } from '../services/createBackground' ;
// import { Table } from './table';
// import { pickaxe } from './pickaxe';
// import { Player } from './player';

export class card{

  constructor( id , card , number , color , owner , table ){
    this.id = id ;
    this.owner = owner;
    this.table = table;

    /// element of dom
    this.element = card ;

    /// this number of card
    this.number = 1 + number ;
    this.chageNumber();

    /// this color of card 
    this.color = color;
    this.colorNumber = null;
    this.changeColorNumber();

    /// add type if the card is special
    this.isSpecial = this.addtype();
    this.view();

  };

  changeColorNumber(){
    ///// number is the position fot sprites
    if ( this.color === 'red' )  this.colorNumber = 0 ;
    if ( this.color === 'yellow' ) this.colorNumber = -175 ;
    if ( this.color === 'blue' ) this.colorNumber = -360 ;
    if ( this.color === 'green' ) this.colorNumber = -535;
  };

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

  view(){

    this.element = document.createElement('section');
    this.element.className = 'card';
    this.element.classList.add(`${this.color}__${this.number}`)

    // us the number for position of background 
    createBackground( this.element , this.number , this.colorNumber );

    this.element.addEventListener('click', ()=> {
      this.render();
    })
  };

  render(){
    // get the newOwner 
    let newOwner = this.filterCard() ;
 
    if ( this.owner.type !==  newOwner.type  ) {
      this.changeOwner( newOwner );
      this.owner.element.append( this.element );
    }
  };

  filterCard(){
    if ( this.owner.type === 'Player' && this.hasCompatible() ) {  return this.table.upland };
    if ( this.owner.type === 'pickaxe' ) { return this.table.player  ; }
  };

  hasCompatible(){
    if ( this.color === this.table.upland.main.color 
      ||  this.number === this.table.upland.main.number  
      ){ return true };
    };

  changeOwner( newOwner ){
    /// set the new owner 
    this.owner.cards = this.owner.cards.filter( card  => card.id !== this.id  );
    if ( this.owner !== newOwner ) {
      this.owner = newOwner;
      this.owner.setCard( this );
    }
  };

  addtype(){
    if( this.element ){
      return true ;
    };
  }

};



