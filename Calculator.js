'use strict'

function Calculator() {
	this.methods = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
	}

	this.calculate = function (str) {
		
		for (let key in this.methods) {
			if (str.includes(key)) {	
				let splittedStr = str.split(key);
				const firstNum = parseInt(splittedStr[0].trim());
				const secondNum = parseInt(splittedStr[1].trim());
				const operation = key;

				return this.methods[operation](firstNum, secondNum);
			}
		}
		return 'Unknown method';
	}

	this.addMethod = function (method, func) {
		this.methods[method] = func;
	}
};



let calc = new Calculator;
console.log(calc.calculate("3 +7")); // 10

let powerCalc = new Calculator;
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

let resultPow = powerCalc.calculate('2 **   3');
let resultDel = powerCalc.calculate('2 / 2');
let resultMult = powerCalc.calculate('5 * 8');

console.log(resultPow);
console.log(resultDel);
console.log(resultMult);