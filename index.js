import Card from './src/card.js';
import Deck from './src/deck.js';
import Rank from './src/rank.js';
import Suit from './src/suit.js';

import standard from './src/decks/standard.js';

export default {
	decks: {
		standard
	},
	sortByRank: (hand) => {
		hand.sort((a, b) => {
			return a.rank.sortNum - b.rank.sortNum;
		}).sort((a, b) => {
			if (a.rank.sortNum === b.rank.sortNum) return a.suit.sortNum - b.suit.sortNum;
		});
	},
	sortBySuit: (hand) => {
		hand.sort((a, b) => {
			return a.suit.sortNum - b.suit.sortNum;
		}).sort((a, b) => {
			if (a.suit.sortNum === b.suit.sortNum) return a.rank.sortNum - b.rank.sortNum;
		});
	},
	Card,
	Deck,
	Rank,
	Suit
}
