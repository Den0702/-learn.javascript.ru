let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(array) {
	let newArray = array.map(item => item);
	return newArray.sort();
}

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)