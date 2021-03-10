// After 15s, receive API from FE, and see who will die.
// List API
// Axrray[Obj]
const fakeAPI = require("./fakeAPIs");
const cleanup = require("./cleanup");
let Arr = fakeAPI.testGetVotes();
let playerList = fakeAPI.getPlayerList();

function getVotes(Arr, playerList) {
    Arr.forEach(v => {
        // clean up
        playerList = cleanup.cleanup("newVotes", playerList);
        let index, indexV;
        index = v.beVoted;
        indexV = v.vote;
        playerList[index].beVoted++;
        playerList[index].whoVote = [...playerList[index].whoVote, indexV];
    });
    return playerList;
};

module.exports = {
    getVotes,
}