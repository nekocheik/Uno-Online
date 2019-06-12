import { Table } from './table';
const CircularJSON = require('circular-json');

export class game {
  constructor(){
    this.table = new Table();
    this.time = 0 ;
    
    this.socket = io.connect('http://localhost:5050');
    this.emitServer();
  }
  emitServer( ){
    let table = this.table.pickaxe.cards ;
    this.socket.emit( 'table' ,    CircularJSON.stringify( table  )  );
    this.socket.on( 'null', function ( data ) {
      console.log( CircularJSON.parse(data) );
    })
  }
}
