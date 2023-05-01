class ScoreCard {
  constructor() {
    this.frames = [];
  }

  addFrame(firstRoll, secondRoll) {
    this.frames.push({
      firstRoll: firstRoll,
      secondRoll: secondRoll,
    });
  }

  calculateScore() {
    let score = 0;

    for (let i = 0; i < this.frames.length; i++) {
      const frame = this.frames[i];
      score += frame.firstRoll + frame.secondRoll;

      if (i < 9) {
        // strike
        if (frame.firstRoll === 10) {
          score += this.frames[i + 1].firstRoll;
          // consecutive strike
          if (this.frames[i + 1].firstRoll === 10) {
            score += this.frames[i + 2].firstRoll;
          } else {
            score += this.frames[i + 1].secondRoll;
          }
          // spares case
        } else if (frame.firstRoll + frame.secondRoll === 10) {
          score += this.frames[i + 1].firstRoll;
          if (
            this.frames[i + 1].firstRoll + this.frames[i + 1].secondRoll ===
            10
          ) {
            score += this.frames[i + 2].firstRoll;
          }
        }
      }
    }
    return score;
  }
}

module.exports = ScoreCard;
