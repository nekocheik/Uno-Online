import { card } from './card';
import { cardList } from '../services/cardsList';
import { Mix } from '../services/mix';

export class cards {
  constructor( table){
    this.cards = [
      // all cards 
     ]
    this.table = table ;
    this.createCards();
  };

  createCards(){
    if (this.cards.length > 0 ) { 
      this.getCards()
      return }
    /// created the basic cards 
    // object of card number 
    let basicCard = cardList.typesOfCards.typeBasic ;

    for (var thecard in basicCard ) {
      for (let i = 0; i < cardList.chaceToGet.many ; i++) {
        this.cards.push( new card( ( this.cards.length  ) , thecard , i , thecard , this , this.table ) )
      }
    }

    this.cards = Mix(this.cards)
    /// Mix a card 
  };
};

