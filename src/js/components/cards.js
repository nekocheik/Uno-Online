import { card } from './card';
import { cardList } from '../services/cardsList';

export class cards {
  constructor(){
    this.cards = [
      // all cards 
    ];
    this.createCards();
  };
  
  createCards(){
    /// created the basic cards 
    // object of card number 
    let basicCard = cardList.typesOfCards.typeBasic ;

    for (var thecard in basicCard ) {
      for (let i = 0; i < cardList.chaceToGet.many ; i++) {
        this.cards.push( new card( thecard , i , thecard ) )
      }
    }
    
  };
};

