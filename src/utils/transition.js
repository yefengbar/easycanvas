var transitions = [];

var second2frame = function (second) {
	return second / 1000 * 60;
};

module.exports = {
	linear: function (a, b, duration) {
		var l = transitions.length;
		transitions.push(a);
		return function () {
			var current = transitions[l];
			if (current !== b) {
				transitions[l] += (b - a) / second2frame(duration);
			}
			return current;
		};
	},

	pendulum: function (a, b, duration) {
		var l = transitions.length;
		transitions.push(0);
		return function () {
			var current = Math.abs(Math.sin(transitions[l]));
			transitions[l] += 3.1416 / second2frame(duration);
			return a + (b - a) * current;
		};
	}
};