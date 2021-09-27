const info = require('./information');
const cowsay = require('cowsay');

console.log(cowsay.think({
    text : `My name is ${info.name} and my campus is located in ${info.campus}.`,
    e : "oO",
    T : "U "
}));
