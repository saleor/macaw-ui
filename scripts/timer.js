module.exports = class Timer {
  ref = null;

  constructor() {
    this.ref = Date.now();
  }

  getTime() {
    const time = Date.now() - this.ref;
    this.reset();

    return time;
  }

  reset() {
    this.ref = Date.now();
  }
};
