function chooseTwoMovies(flight_length, movie_lengths) {
	let movieObj = {};
	for(let i = 0; i < movie_lengths.length; i++) {
		movieObj[movie_lengths[i]] = i;
	}

	for(let movieLen in movieObj) {
		let timeLeft = flight_length - movieLen;
		if(movieObj[timeLeft] && movieObj[movieLen] !== movieObj[timeLeft]) {
			return [movieLen, timeLeft];
		}
	}
	return []
}

console.log(chooseTwoMovies(90, [10, 30, 40, 50]));

/*
 {
 	10: 0
	30: 1
	40: 2
 }


*/

