const ScoreCard = require('./scoreCard');

describe('ScoreCard', () => {
  let myScore;
  beforeEach(() => {
    myScore = new ScoreCard();
  });

  it('starts the score at 0', () => {
    expect(ScoreCard.calculateScore).toBe(0);
  });
});
