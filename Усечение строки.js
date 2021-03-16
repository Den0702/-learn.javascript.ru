function truncate(str, maxlength) {
	if (maxlength >= str.length){
		return str;
	} else {
		const newStr = str.substr(0, maxlength-1) + '…';
		return newStr;
	}
}

//const trunc = truncate('Вот, что мне хотелось бы сказать на эту тему', 20);
const trunc = truncate('Hello everyone!', 20);
console.log(trunc);
