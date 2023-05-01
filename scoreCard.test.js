const ScoreCard = require('./scoreCard');

describe('ScoreCard', () => {
  let myScore;
  beforeEach(() => {
    myScore = new ScoreCard();
    myScore.addFrame(2, 5);
  });

  it('adds a score to each frame', () => {
    expect(myScore.frames[0].firstRoll).toEqual(2);
    expect(myScore.frames[0].secondRoll).toEqual(5);
  });
  it('calculates the score without any strikes or spares', () => {
    myScore.addFrame(3, 2);
    expect(myScore.calculateScore).toBe(12);
  });
});
