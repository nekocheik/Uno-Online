// const imageOfcard = require('../../')

export class card{
  constructor( card , number , color ){
    this.card = card ;
    this.number = number + 1 ;
    this.chageNumber();
    this.color = color;
    this.front = null;
    this.back = null ;
    this.addtype();
    this.render();
  }
  chageNumber(){
    if ( this.number && ( this.number > 9 ) ) {
      if ( this.number >= 11 ) {
        this.number = this.number - 10 + 1 ;
        console.log( this.number )
      }if( this.number === 10 ) {
        this.number = this.number = 1 ;
      };
    }
  }
  render(){
    this.element = document.createElement('section');
    this.element.className = 'card';
    this.element.classList.add(`${this.color}__${this.number}`)

  
  };
  addtype(){
    if(this.card){

    }
  }
}
