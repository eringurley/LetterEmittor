const EventEmitter = require ('events');

module.exports = class LetterEmitter extends EventEmitter {
  read(str) {
    //take a string
      str
      //split the string .split
      .split('')
      //emit an event for each item in the string .forEach
      .forEach((letter, offset) => {
        //.emit or this.emit
        this.emit('letter', { letter, offset });
      });
      this.emit('end');
  }
};
