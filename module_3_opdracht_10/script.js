/*
eisen:
als eerst een bericht die vraagt om de naam:
    "Welkom! Wat is je naam?"
Naam kunnen invoeren en op enter drukken.
Krijg een bericht terug: "Hey [naam]"
Na de begroeting, nieuw bericht:
    "Voer een nummer in van 0 tot 25 om te beginnen met raden..."
Laat de server een nummer pakken van 0 tot 25 met Math.random()
nieuwe input om cijfer te kiezen
alert () als verkeerd geraden:
    "Dat is niet correct."
alert () als goed geraden:
    "Gefeliciteerd je hebt gewonnen"
Spel is voorbij bericht:
    "Dag [naam]. Tot de volgende keer"

bonus:
max 5 pogingen
    na elke poging hoeveel pogingen nog over zijn
    bericht als er geen pogingen meer over zijn
gebruiker zelf laten bepalen wat de range van nummers zijn
    kleinste getal kiezen
    grootste getal kiezen
speel met die range



tips & tricks
todo list maken, welke functionaliteiten? in een losse functie? welke stappen? uitschrijven

prompt() en alert() functies


https://www.w3schools.com/jsref/met_win_prompt.asp
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt
*/


let name = prompt('Welkom! Wat is je naam?');
alert('Hey ' + name + '!');
let guessNumber = prompt('Voer een nummer in van 0 tot 25 om te beginnen met raden...')

/*
for (guess = 5; guess < 1; guess--) {
    if (guessNumber !== Math.floor(Math.random() * 26)) {
        alert("Dat is niet correct. Je hebt nog " + guess + " pogingen over.")
        let guessNumber = prompt('Voer een nummer in van 0 tot 25 om te raden...');
} else {
    alert("Gefeliciteerd je hebt gewonnen");
}
}*/

if (guessNumber == Math.floor(Math.random() * 26)) {
    alert("Gefeliciteerd je hebt gewonnen");
} else {
    alert("Dat is niet correct.");
}


alert('Dag ' + name + '. Tot de volgende keer');