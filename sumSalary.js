function sumSalary(){
  let salaries = {
		John: 1000,
		Ann: 1600,
		Pete: 1300,
		month: 'December',
		currency: 'USD',
		isPayed: false
	}  	

	for(let prop in salaries){
		console.log(salaries[prop]);
	}
}