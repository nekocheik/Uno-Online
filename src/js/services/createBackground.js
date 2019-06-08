const imageOfcard = require('../../assets/UNO-Front.svg');

export function createBackground ( element , positionX , positionY ) {
  const elementSize =  element.clientWidth ;
  element.style.backgroundImage = `url('${imageOfcard}')` ;
  element.style.backgroundPosition = `${  ( positionX - 1 ) * 125 }px ${ positionY - 1 * 185 }px` 
  // console.log(  positionX - 1 )
}