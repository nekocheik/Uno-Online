import { cards } from './cards' ;
import { pickaxe } from './pickaxe';

export class Table{
  constructor(){
    this.element = document.querySelector('.table')
    this.objectCards = new cards();
    this.pickaxe = new pickaxe( this.objectCards.cards );
    this.render();
  }
  render(){
    this.element.appendChild( this.pickaxe.element )
  }
}