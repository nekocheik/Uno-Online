import { Table } from './table';
const CircularJSON = require('circular-json');

export class game {
  constructor(){
    this.table = new Table( ) ;
    this.time = 0 ;
    this.socket = io.connect('http://localhost:5050');
    this.setTable();
    this.owner = false;
  };

  setTable( ){
    // const json = CircularJSON.parse() ;
    let body = document.querySelector('.game').innerHTML;
    this.socket.emit( 'playerStart', CircularJSON.stringify(this.table ) , body  );
    this.socket.on('owner' , function ( data  ) {
      this.owner = data
    });

    this.socket.on( 'getPartie' , ( data , game )=>{
      const dataPaser = CircularJSON.parse( data );
      this.table.getAnotherTable( dataPaser );
      document.querySelector('.game').innerHTML = game.toString();
    });
  };
  
}
