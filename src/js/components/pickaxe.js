export class pickaxe {
  constructor( cards ){
    this.cards = cards ;
    this.element = null;
    this.type = 'pickaxe';
    this.render();
  }
  render(){
    this.element = document.createElement('div')
    this.element.className = 'pickaxe';
    this.cards.forEach( card => {
    this.element.appendChild(card.element)
    card.owner = this ;
    });
    console.log(this)
  };
}