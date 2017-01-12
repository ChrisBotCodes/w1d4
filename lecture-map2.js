
const usersList1 = [{
  name: 'Jane Doe',
  hobbies: ['soccer', 'boxing'],
  age: 29
}, {
  name: 'John Doe',
  hobbies: ['basketball'],
  age: 29
}];

// ==> [2,1]
// what .map() is doing behind the scenes:
const customMap = function(data, callback){
  const mappedValues = [];
  for (let i = 0; i < data.lenth; i++){
    const current = data[i];
    const result = callback(current);
    mappedValues.push(result);
  }
  return mappedValues;
}



const countHobbies = function(user){
  return user.hobbies.length;
}
const mappedUsers = customMap(usersList1, countHobbies);

console.log(mappedUsers);
console.log(usersList1.map(countHobbies));