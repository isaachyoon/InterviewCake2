/*
Each breakfast delivery is assigned a unique ID, a positive integer. 
When one of the company's 100 drones takes off with a delivery, the delivery's ID is added to an array, delivery_id_confirmations.
When the drone comes back and lands, the ID is again added to the same array.
*/

function droneManager(delivery_id_confirmations) {
	let droneSystem = {};
	for (let i = 0; i < delivery_id_confirmations.length; i++) {
		if (!droneSystem[delivery_id_confirmations[i]]) {
			droneSystem[i] = 1;
		} else {
			droneSystem[delivery_id_confirmations[i]]++;
		}
	}
	for (let droneId in droneSystem) {
		if(droneSystem[droneId] % 2 !== 0) {
			return droneId;
		}
	}

	return 'all drones are present';
}

//time complexity: O(n);
//space complexity: O(n);
//if we use bitwise operations, we can save space.