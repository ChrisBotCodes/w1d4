const usersList1 = [{
  name: 'Jane Doe',
  hobbies: ['soccer', 'boxing']
}, {
  name: 'John Doe',
  hobbies: ['basketball']
}];

const usersList2 = [{
  name: 'Chris Bot',
  hobbies: ['tenor sax', 'Melee']
}, {
  name: 'Kristen Piggot',
  hobbies: ['baking', 'yoga']
}];

// "Jane Doe's hobbies are: soccer, boxing." for each person in list


// Good code:
const printUserHobbies = function(user){
  console.log(user.name + "'s " + "hobbies are: " + user.hobbies);
}

// crude version of what the built-in 'forEach' has:
const forEach = function(data, callback){
  for (var i = 0; i < data.length; i++){
    // console.log(users[i].name + "'s " + "hobbies are: " + users[i].hobbies)
    callback(data[i]);
  }
}

// Good code call:
usersList1.forEach(printUserHobbies);
usersList2.forEach(printUserHobbies);

// using our crude version of forEach:
forEach(usersList1, printUserHobbies);
forEach(usersList2, printUserHobbies);