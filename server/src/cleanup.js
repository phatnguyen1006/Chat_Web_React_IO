// Cleanup everything or something was requested.

function cleanup(event, playerList) {
    switch (event) {
        case "newVotes":
            playerList.forEach(player => {
                player.beVoted = 0;
                player.whoVote = [];
            });
        default:
            return playerList;
    }
};

module.exports = {
    cleanup,
}