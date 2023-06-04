let telefono = '1234567891';

let clear = telefono.slice(0,7);
let obscured = telefono.slice(7).replace(/\d/g, '*')
let numberChecked = clear + obscured;
console.log(numberChecked);
