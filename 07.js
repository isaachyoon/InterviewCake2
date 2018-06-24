/*
	Write a class TempTracker with these methods
	-insert
	-get_max();
	-get_min();
	-get_mean();
	-get_mode();
*/

function tempTracker() {
	this.tempNum = 0;
	this.tempHash = {};
	this.minTemp = Number.POSITIVE_INFINITY;
	this.maxTemp = Number.NEGATIVE_INFINITY;
	this.totalTemp
	this.highestMode = 0;
	this.mode = null;
}

tempTracker.prototype.insert = function(temp) {
	this.totalTemp += temp;
	if(!this.tempHash[temp]) {
		this.tempHash[temp] = 1;
	} else {
		this.tempHash[temp]++;
	}
	if(this.tempHash[temp] > this.highestMode) {
		this.highestMode = this.tempHash[temp];
		this.mode = temp;
	}
	this.tempNum++;
	if (temp > this.maxTemp) {
		this.maxTemp = temp;
	}
	if (temp < this.minTemp) {
		this.minTemp = temp;
	}

}

tempTracker.prototype.get_max = function() {
	return this.maxTemp;
}

tempTracker.prototype.get_min = function() {
	return this.minTemp;
}

tempTracker.prototype.get_mean = function() {
	return this.totalTemp / tempNum;

}

tempTracker.prototype.get_mode = function() {
	return this.mode;
}

let thermostat = new tempTracker();
thermostat.insert(70)
thermostat.insert(72)
thermostat.insert(73)
thermostat.insert(70)
thermostat.insert(70)
thermostat.insert(71)
thermostat.insert(72)
thermostat.insert(79)
thermostat.insert(63)
console.log(thermostat.get_max());
console.log(thermostat.get_min());
console.log(thermostat.get_mode())
