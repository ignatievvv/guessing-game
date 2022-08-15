class GuessingGame {
    constructor() {
      this.min = null;
      this.max = null;
      this.solution = null;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      this.solution = Math.round(this.max - (this.max - this.min) / 2);
      return this.solution;
    }

    lower() {
      this.max = this.solution;
      this.solution = null;
    }

    greater() {
      this.min = this.solution;
      this.solution = null;
    }
}

module.exports = GuessingGame;
