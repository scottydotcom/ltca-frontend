function displayNameAndAge(name, age) {
    let message = name + " is " + age; console.log(message);
    }
    // elsewhere
    let someName = "scott";
    let someAge = 999;
  
  displayNameAndAge(someName, someAge); 
  someName = "bob";
  someAge = 9999; 
  
  displayNameAndAge(someName, someAge);