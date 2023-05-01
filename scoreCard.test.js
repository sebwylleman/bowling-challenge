const ScoreCard = require('./scoreCard');

describe('ScoreCard', () => {
  let myScore;
  beforeEach(() => {
    myScore = new ScoreCard();
  });

  it('adds a score to each frame', () => {
    myScore.addFrame(2, 5);
    expect(myScore.frames[0].firstRoll).toEqual(2);
    expect(myScore.frames[0].secondRoll).toEqual(5);
  });

  it('initialises a score of zero by default when no frames have been played', () => {
    expect(myScore.calculateScore()).toBe(0);
  });

  it('calculates the score without any strikes or spares', () => {
    myScore.addFrame(3, 2);
    myScore.addFrame(2, 5);
    expect(myScore.calculateScore()).toBe(12);
  });

  it('calculates the score with bonus points for strikes', () => {
    myScore.addFrame(10, 0);
    myScore.addFrame(7, 2);
    expect(myScore.calculateScore()).toBe(10 + 7 + 2 + 7 + 2);
  });

  it('calculates the score with bonus points for spares', () => {
    myScore.addFrame(5, 5);
    myScore.addFrame(4, 4);
    expect(myScore.calculateScore()).toBe(5 + 5 + 4 + 4 + 4);
  });
});
