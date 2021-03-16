'use strict';

function camelize(str) {
	const parts = str.split('-');

	//const omit = parts[0] === '' ? parts[1] : parts[0];

	const camelcasedParts = parts.map((part, index) => {
		if (index === 0) {
			return part;
		}

		const firstPart = part.slice(0, 1).toUpperCase();
		const rest = part.slice(1);

		return `${firstPart}${rest}`
	});

	return camelcasedParts.join('');

}

console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));
