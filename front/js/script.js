console.log('its worked')

export function myFunction (a , b){
 let output ; 
 if(typeof a === 'string' || typeof b === 'string'){
  output = a+' '+b
 } else if(typeof a === 'number' && typeof b === 'number') {
  output = a+b ;
 }

 return output ;
}