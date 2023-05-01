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
});
