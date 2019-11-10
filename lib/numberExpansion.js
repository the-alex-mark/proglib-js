'use strict';

/**
 * Округляет число до нужного количества знаков после запятой.
 * @param {Number} n Количество знаков после запятой.
 */
Number.prototype.round = function (n) {
	if (!isNaN(this) && !n) return Math.round(this);
	if (isNaN(this) || isNaN(n)) return false;

	var m = Math.pow(10, n);
	return Math.round(this * m) / m;
}

module.exports = {
    round: Number.prototype.round
}