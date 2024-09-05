//Map in js

//Map is a collection of elements where each element is stored as a Key, value pair.
//Map object can hold both objects and primitive values as either key or value.

var map = new Map();
map.set('name', 'harsh');
map.set('age', 24);
map.set('city', 'ahmedabad');
map.set('country', 'india');
console.log(map);

//get the value of key

console.log(map.get('name'));

//get the size of map

console.log(map.size);

//check the key is present or not

console.log(map.has('name'));

//delete the key

map.delete('name');
console.log(map);

//type of map

console.log(typeof map);

