class MyPlayer {
  constructor(raise,betSize,  hand, totalChips) {
    this.betSize = betSize
    this.hand = hand
    this.totalChips = totalChips
    this.raise = raise
  }

  fold() {

    this.hand = {};
  }

  check() {
    
  }

  call(){
    if (this.betSize > this.totalChips){
    this.totalChips -= this.raise
    this.currentTurn = false;}
    return this.raise
  }

  raise() {
    this.totalChips -= this.raise
    this.betSize += this.raise
    return this.betSize;
  }

  allIn(){
    this.betSize += this.totalChips
    this.totalChips = 0

    return this.betSize
  }
}
