function checkSpam(str) {
	str.toLowerCase();	
	if (str.includes('1xbet') || str.includes('xxx')) {
			return false;
	} else {
		return true;
	}
}

const spam = checkSpam('1Xbe now');
console.log(spam);