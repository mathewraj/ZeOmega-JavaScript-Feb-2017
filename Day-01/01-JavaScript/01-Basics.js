function filterEvenOdd(numbers){
   var result = { even : [], odd : [] };
   for(var i=0; i < numbers.length; i++){
       if (numbers[i] % 2 === 0){
           result.even.push(numbers[i]);
       } else {
           result.odd.push(numbers[i]);
       }
   }
   return result;
}

function filterEvenOdd(numbers){
	var oddNumbers = [],
		evenNumbers = [];
	for(var i=0; i < numbers.length; i++){
       if (numbers[i] % 2 === 0){
           evenNumbers.push(numbers[i]);
       } else {
           oddNumbers.push(numbers[i]);
       }
   }
   return { odd : oddNumbers, even : evenNumbers};
}

function filterEvenOdd(numbers){
	var result = {even : [], odd : []};
	for(var i=0; i < numbers.length; i++){
		result[numbers[i] % 2 == 0 ? "even" : "odd"].push(numbers[i]);
	}
	return result;
}

var products = [
	{id : 6, name : 'Pen', cost : 70, units : 40, category : 'stationary'},
	{id : 2, name : 'Hen', cost : 50, units : 80, category : 'grocery'},
	{id : 9, name : 'Pencil', cost : 90, units : 30, category : 'stationary'},
	{id : 4, name : 'Vegie', cost : 30, units : 60, category : 'grocery'},
	{id : 5, name : 'Marker', cost : 50, units : 02, category : 'stationary'},
	{id : 7, name : 'Pant', cost : 1000, units : 10, category : 'apparel' }
] 



function groupByCategory(products){
	var result = {};
	for(var i=0; i < products.length; i++){
		var product = products[i],
			category = product.category;
		if ( !result.hasOwnProperty(category))
			result[category] = [];
		result[category].push(product);

	}
	return result
}

var productsByCategory = groupByCategory(products)


{
	'stationary' : [6, ],
	'grocery' : [],
	'apparel' : []
}





































