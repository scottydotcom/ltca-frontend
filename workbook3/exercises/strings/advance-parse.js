function parseAndDisplayName(name) {
    if(typeof name === 'string'){
        let nameSpace = name.split(" ")
        
        let firstName = nameSpace[0];
        let middleName = "";  
        let lastName = "";

        if (nameSpace.length > 2) {
         middleName = nameSpace[1];
         lastName = nameSpace.slice(2).join(" ");     
         } else if (nameSpace.length === 2) {  
            lastName = nameSpace[1];
        }
    console.log(`Name: ${name}`);
    console.log(`First name: ${firstName}`);
    console.log(`Middle name: ${middleName}`);
    console.log(`Last name: ${lastName}`);
  } else {
    console.log("Error: The name must be a string");
    }
}
  parseAndDisplayName("Cher");
  parseAndDisplayName("Brenda Kaye");
  parseAndDisplayName("Dana Lynn Wyatt");