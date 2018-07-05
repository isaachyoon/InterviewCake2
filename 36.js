//write a function to tell if a full deck of cards shuffled_deck is a single riffle of two other halves

function single_riffle(half1, half2, shuffled_deck) {
	let firstInd = 0,
		secondInd = 0,
		shuffled_deck_ind = 0;
	while (shuffled_deck_ind) {
		if (half1[firstInd] === shuffled_deck[shuffled_deck_ind] &&
				firstInd < half1.length - 1) {
			firstInd++;
		} else if (half1[secondInd] === shuffled_deck[shuffled_deck_ind] && 
				secondInd < half2.length - 1) {
			secondInd++;
		} else {
			return false;
		}
		shuffled_deck_ind++;
	}
	return true;
}