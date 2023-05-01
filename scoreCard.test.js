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
});
