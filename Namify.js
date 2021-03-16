/*План cоздания массива строк из массива объектов
		1 Перебор массива объектов
			1.1 Маппинг каждого извлеченного users.name в новый массив  
*/
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [ vasya, petya, masha ];

function namify(users) {
	// ваш код
	const usersNames =  users.map(function(user){
		return user.name;
	});
	return usersNames; 
	 
}
let names = namify(users); // ['Вася', 'Петя', 'Маша']
console.log(names);