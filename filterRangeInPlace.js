function filterRangeInPlace(arr, a, b) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
		
		if(arr[i] >= a && arr[i] <= b){
      newArr.push(arr.splice(i, 1));
      i--;
    }
  }
	return newArr;
}

let arr = [5, 3, 8, 1];

console.log(filterRangeInPlace(arr, 1, 4)); // удалены числа вне диапазона 1..4

//alert( arr ); // [3, 1]