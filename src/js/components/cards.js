import { card } from './card';
import { cardList } from '../services/cardsList';

export class cards {
  constructor( table ){
    this.cards = [
      // all cards 
    ];
    this.table = table ;
    this.createCards();
  };
  
  createCards(){
    /// created the basic cards 
    // object of card number 
    let basicCard = cardList.typesOfCards.typeBasic ;

    for (var thecard in basicCard ) {
      for (let i = 0; i < cardList.chaceToGet.many ; i++) {
        this.cards.push( new card( ( this.cards.length  ) , thecard , i , thecard , this , this.table ) )
      }
    }

  };

  getId( i , cardColor  ){
    // if ( cardColor === 'red') { return i   }
    // if ( cardColor === 'yellow') { return i + ( cardList.chaceToGet.many * 1 ) }
    // if ( cardColor === 'blue') { return i + ( cardList.chaceToGet.many * 2 )  }
    // if ( cardColor === 'green') { return i + ( cardList.chaceToGet.many * 3 )}
  }
};

