class footballTeam{
    constructor(clubName, country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers){
        let currentInvitedPlayers = [];
        for(let player of footballPlayers){
            let [name, age, playerValue] = player.split('/');

            let currentPlayer = this.invitedPlayers.find(player => player.name === name);

            if(!currentPlayer){
                this.invitedPlayers.push({name, age, playerValue});
                if(!currentInvitedPlayers.includes(name)){
                    currentInvitedPlayers.push(name);
                }
            }

            else {
                if(currentPlayer.playerValue < playerValue){
                    currentPlayer.playerValue = playerValue;
                }
            }

        }

        return `You successfully invite ${currentInvitedPlayers.join(", ")}.`
    }

    signContract(selectedPlayer){
        let [name, playerOffer] = selectedPlayer.split("/");

        let currentPlayer = this.invitedPlayers.find(player => player.name === name);

        if(!currentPlayer){
            throw new Error(`${name} is not invited to the selection list!`)
        }

        if(playerOffer < currentPlayer.playerValue){
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${Number(currentPlayer.playerValue) - Number(playerOffer)} million more are needed to sign the contract!`)
        }

        currentPlayer.playerValue = "Bought";

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        let currentPlayer = this.invitedPlayers.find(player => player.name === name);

        if(!currentPlayer){
            throw new Error(`${name} is not invited to the selection list!`)
        }

        if(currentPlayer.age < age){
            let ageDiff = age - currentPlayer.age;
            if(ageDiff < 5){
                return `${name} will sign a contract for ${ageDiff} years with ${this.clubName} in ${this.country}!`
            }
            else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        }
        else {
            return `${name} is above age limit!`
        }
    }

    transferWindowResult(){
        let buff = "Players list:";

        let sorted = this.invitedPlayers.sort((a,b)=>{return a.name.localeCompare(b.name)})

        for(let pl of sorted){
            buff += `\nPlayer ${pl.name}-${pl.playerValue}`
        }

        return buff;

    }


}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.ageLimit("Lionel Messi", 33 ));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.ageLimit("Pau Torres", 26));
console.log(fTeam.signContract("Kylian Mbappé/240"));



