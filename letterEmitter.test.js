
describe('letterEmitter', () => {
  let letterEmitter;
  beforeEach(done => {
    letterEmitter = new LetterEmitter();
    done();
  });

  it('emits an event for each letter'), done => {
    letterEmitter.on('letter', data => {
      expect(data).toContain('hi');
    });
    letterEmitter.read('hi');

  }
});

//when you get data (on) you want to have an expect statement to check that 
//the data you're getting is the right data
//on takes two things (an event and the callback/data)
//on class have a read method that takes a string
