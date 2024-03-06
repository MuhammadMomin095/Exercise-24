var car = 'subaru';
var age = 21;
var numbers = [1, 2, 3, 4, 5];
//**String Test**
// Test 1: Equality comparison (true)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //  true(case-insensitive)
// Test 2: Strict equality (false)
console.log("Is car === 'subaru'? I predict false.");
console.log(car === 'subaru'); // false (case-sensitive)
// Test 3: Inequality comparison (true)
console.log("Is car != 'subaru'? I predict True.");
console.log(car != 'subaru'); // True
// Test 4: Strict Inequality (false)
console.log("Is car !== 'subaru'? I predict True.");
console.log(car !== 'subaru'); // True (case-sensitive)
//**Lowercase Function Tests**
// Test 5: Lowercase conversion (true)
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); // True (converted to lowercase)
// Test 6: Lowercase conversion (false)
console.log("Is car === car.toLowerCase()? I predict False.");
console.log(car === car.toLowerCase()); // False (original value remains uppercase)
//**Numerical Tests**
// Test 7: Equality (true)
console.log("Is age == 21? I predict True.");
console.log(age == 21); // True
// Test 8: Inequality (false)
console.log("Is age != 25? I predict False.");
console.log(age != 25); // False
// Test 9: Greater than (false)
console.log("Is age > 25? I predict False.");
console.log(age > 25); // False
// Test 10: Less than or equal (true)
console.log("Is age <= 21? I predict True.");
console.log(age <= 21); // True
//**Logical Operators**
// Test 11: AND (true)
console.log("Is age > 15 && age < 25? I predict True.");
console.log(age > 15 && age < 25); // True (both conditions met)
// Test 12: OR (false)
console.log("Is age > 25 || age < 13? I predict False.");
console.log(age > 25 || age < 13); // False (neither conditions met)
//**Array Tests**
// Test 13: In array (true)
console.log("Is 4 in numbers? I predict True.");
console.log(4 in numbers); // True (checks for inder=x existence)
// Test 14: Not in array (false)
console.log("Is 6 not in numbers? I predict True.");
console.log(6 in numbers); // False (negation of "in" operator)
