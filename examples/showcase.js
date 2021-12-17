import nodeDeck from '../index.js';

const deck = new nodeDeck.Deck();
var hand1 = [],
    hand2 = [];

deck.shuffle();

console.log(nodeDeck.decks.standard.cards.length);

deck.dealMul([hand1, hand2], 5);
deck.deal(hand1, 2);

console.log('hand1:', hand1, `${hand1.length} cards`);
console.log('hand2:', hand2, `${hand2.length} cards`);

deck.insert(hand1.splice(0, 2));
console.log(`Inserted first two card from hand1 back to the deck, hand1 has now ${hand1.length} cards`);
console.log('------------------------------------------');

nodeDeck.sortByRank(hand1);
nodeDeck.sortBySuit(hand2);

console.log('hand1, sorted by <sortByRank>', hand1);
console.log('hand2, sorted by <sortBySuit>', hand2);

console.log('------------------------------------------');
console.log(nodeDeck.decks.standard.cards.length);

hand1 = [];
hand2 = [];
deck.reset();

console.log(`Deck reset, hand1 & hand2 are empty, deck has ${deck.remainingLength} cards`);
