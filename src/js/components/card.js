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
    this.number = number + 1 ;
    this.chageNumber();

    /// this color of card 
    this.color = color;
    this.colorNumber = null;
    this.changeColorNumber()

    /// add type if the card is special
    this.isSpecial = this.addtype();
    this.render();

  };

  changeColorNumber(){
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

  render(){

    this.element = document.createElement('section');
    this.element.className = 'card';
    this.element.classList.add(`${this.color}__${this.number}`)

    // us the number for position of background 
    createBackground( this.element , this.number , this.colorNumber );
    this.element.addEventListener('click', ()=> {
      this.append();
    })
  };

  append(){
    if ( this.owner.type === 'Player' && this.hasCompatible() ) { 
      this.table.upland.element.append( this.element )
      ;}
    if ( this.owner.type === 'pickaxe' ) { 
      this.table.player.element.append( this.element )
      this.table.player.element ;
      };
    this.changeOwner();
  };

  hasCompatible(){
    if ( this.color === this.color || 
       ( this.number === this.number ) || 
       ( this.isSpecial )  ) {
        let position = this.table.player.cards.find( ( card )=> {
          if ( card.id === this.id ) { return card }
        });

        console.log(position , 'ok')
        // this.table.upland.find
      return true ;
    }
    return false ;
  };

  changeOwner(){
    const parent = this.element.offsetParent.className ;
    if ( parent === 'upland') { this.owner = this.table.upland};
    if ( parent === 'pickaxe') { this.owner = this.table.pickaxe };
    if ( parent === 'Player') { this.owner = this.table.player };
  };

  addtype(){
    if( this.element ){
      return true ;
    };
  };

}
