const LetterEmitter = require('./letterEmitter');

describe('letterEmitter', () => {
  let letterEmitter;
  beforeEach(done => {
    letterEmitter = new LetterEmitter();
    done();
  });

  it('emits an event for each letter', done => {
    const str = 'hi';
    letterEmitter.on('letter', event => {
      expect(str[event.offset]).toEqual(event.letter);
    });
    letterEmitter.on('end', done);
    letterEmitter.read(str);

  });
});

//when you get data (on) you want to have an expect statement to check that 
//the data you're getting is the right data
//on takes two things (an event and the callback/data)
//on class have a read method that takes a string

