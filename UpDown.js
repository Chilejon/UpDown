const suits = ['H', 'D', 'C', 'S'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];

const deck = [];
//const deck05092025 = [];

for (const suit of suits) {
  for (const rank of ranks) {
    deck.push({ suit, rank });
  }
}

const seed = dateToSeed(new Date().toISOString().slice(0, 10));
shuffle(deck, seed);
console.log(deck)

dealUpDownInitialCards(deck)

/* function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
} */

function seededRandom(seed) {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function shuffle(array, seed) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i) * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function dateToSeed(dateString) {
  return [...dateString].reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

function formatUpDownCard(card) {
  return card.rank + "-" + card.suit;
}

function dealUpDownInitialCards(deck) {
    const hand1 = formatUpDownCard(deck[0 * 1])
    document.getElementById("Pos1").innerHTML = hand1;
    const hand2 = formatUpDownCard(deck[1 * 1])    
    document.getElementById("Pos2").innerHTML = hand2;
    const hand3 = formatUpDownCard(deck[2 * 1])   
    document.getElementById("Pos3").innerHTML = hand3;
    const hand4 = formatUpDownCard(deck[3 * 1])   
    document.getElementById("Pos4").innerHTML = hand4;
    const hand5 = formatUpDownCard(deck[4 * 1])   
    document.getElementById("Pos5").innerHTML = hand5;
    const hand6 = formatUpDownCard(deck[5 * 1])   
    document.getElementById("Pos6").innerHTML = hand6;
    const hand7 = formatUpDownCard(deck[6 * 1])   
    document.getElementById("Pos7").innerHTML = hand7;
    const hand8 = formatUpDownCard(deck[7 * 1])   
    document.getElementById("Pos8").innerHTML = hand8;
    const hand9 = formatUpDownCard(deck[8 * 1])   
    document.getElementById("Pos9").innerHTML = hand9;

    document.getElementById("CardCount").innerHTML = 9;

    //fullCards(deck);
}

function PosNUp(boxNumber)
{
  const cardCount = getCardCount()
  const hand9 = formatUpDownCard(deck[cardCount])   
  document.getElementById("Pos"+boxNumber+"-2").innerHTML = hand9

  if (getFirstPart(formatUpDownCard(deck[cardCount])) <= getFirstPart(document.getElementById("Pos"+boxNumber).innerHTML))
  {
    document.getElementById("Pos"+boxNumber+"-X").innerHTML = "dead"
  }
  else
  {
    document.getElementById("Pos"+boxNumber).innerHTML = formatUpDownCard(deck[cardCount])
  }

  AddToCardCount()
}

function PosNDn(boxNumber)
{
  const cardCount = getCardCount()
  const hand9 = formatUpDownCard(deck[cardCount])   
  document.getElementById("Pos"+boxNumber+"-2").innerHTML = hand9

  if (getFirstPart(formatUpDownCard(deck[cardCount])) >= getFirstPart(document.getElementById("Pos"+boxNumber).innerHTML))
  {
    document.getElementById("Pos"+boxNumber+"-X").innerHTML = "dead"
  }
  else
  {
    document.getElementById("Pos"+boxNumber).innerHTML = formatUpDownCard(deck[cardCount])
  }

  AddToCardCount()
}

function getFirstPart(str) {
  return parseInt(str.split('-')[0], 10);
}

function getCardCount() {
  return parseInt(document.getElementById("CardCount").innerHTML, 10);
}

function AddToCardCount() {
  let cardCount = parseInt(document.getElementById("CardCount").innerHTML, 10);
  document.getElementById("CardCount").innerHTML = cardCount + 1
  document.getElementById("CardsLeft").innerHTML = 52 - cardCount -1   
}

function fullCards(deck) {
for (let i = 0; i < 51; i++) {
    const hand = formatUpDownCard(deck[i * 1]);
    console.log(hand + " - ");
    }
}
