// TODO: expose a function called "info" which prints the date and a logging string.
'use strict';

exports.info = function(string){
  console.log(new Date() + ': ' + string);
};