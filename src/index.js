"use strict";

const Card = require('./card.js');
const Deck = require('./deck.js');
const Rank = require('./rank.js');
//const Suit = require('./suit.js');

const standard = require('./decks/skipbo.js');

module.exports = {
	decks: {
		standard
	},
	//sortByRank: hand => {
	//	hand.sort((a, b) => {
	//		return a.rank.sortNum - b.rank.sortNum;
	//	}).sort((a, b) => {
	//		if (a.rank.sortNum === b.rank.sortNum) return a.suit.sortNum - b.suit.sortNum;
	//	});
	//},
	//sortBySuit: hand => {
	//	hand.sort((a, b) => {
	//		return a.suit.sortNum - b.suit.sortNum;
	//	}).sort((a, b) => {
	//		if (a.suit.sortNum === b.suit.sortNum) return a.rank.sortNum - b.rank.sortNum;
	//	});
	//},
	shuffle: pile => {
		for (let i = pile.length - 1; i > 0;i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = pile[i];
			pile[i] = pile[j];
			pile[j] = temp;
		}
	},
	Card,
	Deck,
	Rank
}
