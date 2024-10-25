const prompt = require("prompt-sync")({sigint:true});

let nomeHeroi = prompt("Digite o nome do herói: ");
let nivelHeroi = 1
let xpHeroi = 1
let xpGanho = 333

let escolha = prompt("Digite 1 para adicionar xp manualmente ou 2 para ganhar xp derrotando inimigos: ")

if (escolha == 1) {

    xpHeroi = prompt("Digite a xp do Herói: ")

} else {
    
    let i = prompt("digite quantos inimigos seu herói derrotou (quantas vezes será rodado o laço de repetição: ");

do { 
    
    console.log("Voce derrotou " + 1 + " inimigo. e ganhou " + xpGanho + " de XP")
    xpHeroi += xpGanho
    i--
} while (i >= 0);

}


console.log("A XP do " + nomeHeroi + " é de: " + xpHeroi);


if (xpHeroi <= 1000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível de Ferro");
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível de Bronze");
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível de Prata");
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível de Ouro");
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível de Platina");
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível de Ascendente");
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível de Imortal");
} else if (xpHeroi >= 10001) {
    console.log("O herói de nome " + nomeHeroi + " está no nível de Radiante ");
     
}