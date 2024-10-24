const prompt = require("prompt-sync")({sigint:true});

let Victories = prompt("Digite quantas Vitórias seu herói teve: ");
let Defeats = prompt("Digite quantas defeat seu herói teve: ");

let winningBalance

balanceCalculation(Victories, Defeats)

function balanceCalculation(Victories, Defeats) {
    winningBalance = Victories - Defeats
   // console.log("o saldo é: " + winningBalance);
}

levelCalculation()

function levelCalculation() {

    let result

    if (winningBalance <= 10) {
        result = "Ferro";
    } else if (winningBalance >= 11 && winningBalance <= 20) {
        result = "Bronze";
    } else if (winningBalance >= 21 && winningBalance <= 50) {
        result = "Prata";
    } else if (winningBalance >= 51 && winningBalance <= 80) {
        result = "Ouro";
    } else if (winningBalance >= 81 && winningBalance <= 90) {
        result = "Diamante";
    } else if (winningBalance >= 91 && winningBalance <= 100) {
        result = "Lendário";
    } else if (winningBalance >= 101) {
        result = "Imortal";
    }

    return console.log("O herói tem de saldo de " + winningBalance + " está no nível de " + result);
  
}

