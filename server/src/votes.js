// After 15s, receive API from FE, and see who will die.
// List API
// Axrray[Obj]
const fakeAPI = require("./fakeAPIs");
const cleanup = require("./cleanup");

function getVotes(Arr, playerList) {
    // clean up
    playerList = cleanup.cleanup("newVotes", playerList);
    Arr.forEach(v => {
        let index, indexV;
        index = v.beVoted;
        indexV = v.vote;
        playerList[index].beVoted++;
        playerList[index].whoVote = [...playerList[index].whoVote, indexV];
    });
    return playerList;
};

// // Testing
let Arr = fakeAPI.testGetVotes();
let playerList = fakeAPI.getPlayerList();
// getVotes(Arr, playerList);
// console.log(playerList);

// Let's see who will die
function whoDie(){
    let findWhoDied =  getVotes(Arr,playerList);
    let maxVoted = Math.max.apply(Math,findWhoDied.map(player =>{ return player.beVoted}));
    let playerDiedList = findWhoDied.reduce((a,v) => { 
        if (v.beVoted === maxVoted) a.push(v);
        return a; 
    });
    return playerDiedList;
};

// Testing
console.log("index die: ", whoDie());

module.exports = {
    getVotes,
}