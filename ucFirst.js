
function ucFirst(str) {
	if(str === ''){
		return '';
	}
	return str[0].toUpperCase() + str.slice(1);
}

let upper = ucFirst('');
console.log(upper);