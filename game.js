class gameClass{
    constructor(potSize, isGameOver, players){
        this.potsize=potSize
        this.isGameOver = isGameOver;
        this.players = players;
    }


    startGame() {
        if (this.players.length < 2) {
            throw new Error("At least two players are required to start the game.");
        }
        this.isGameOver = false;
        this.currentPlayerIndex = 0;
    }

    nextTurn() {
        if (this.isGameOver) {
            throw new Error("The game is over. Please start a new game.");
        }
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }

    endGame() {
        this.isGameOver = true;
    }

    getCurrentPlayer() {
        return this.players[this.currentPlayerIndex];
    }

}