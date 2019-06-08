export class pickaxe {
  constructor( cards ){
    this.cards = cards ;
    this.element = null;
    this.render();
  }
  render(){
    this.element = document.createElement('div')
    this.element.className = 'pickaxe';
    this.cards.forEach( card => {
      this.element.appendChild(card.element)
    });
    console.log(this)
  };
}