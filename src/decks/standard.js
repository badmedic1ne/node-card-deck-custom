import Card from '../card.js';
import Rank from '../rank.js';
import Suit from '../suit.js';

export const ranks = [
	new Rank('A', 'Ace', 14),
	new Rank('2', 'Two', 2),
	new Rank('3', 'Three', 3),
	new Rank('4', 'Four', 4),
	new Rank('5', 'Five', 5),
	new Rank('6', 'Six', 6),
	new Rank('7', 'Seven', 7),
	new Rank('8', 'Eight', 8),
	new Rank('9', 'Nine', 9),
	new Rank('10', 'Ten', 10),
	new Rank('J', 'Jack', 11),
	new Rank('Q', 'Queen', 12),
	new Rank('K', 'King', 13),
]

export const suits = [
	new Suit('Clubs', '\u2667', 2),
	new Suit('Diamonds', '\u2662', 3),
	new Suit('Hearts', '\u2661', 4),
	new Suit('Spades', '\u2664', 1)
]

export var cards = [];

ranks.forEach(rank => {
	suits.forEach(suit => {
		cards.push(new Card(rank, suit));
	})
})

export const joker = new Card(new Rank('Joker', 'Joker', 15), new Suit('\u00a7', '\u00a7', 0));

export default { cards: cards, joker: joker, ranks: ranks, suits: suits }
