function parseAndDisplayName(name) {
  if (typeof name === "string") {
    const nameSpace = name.indexOf(" ");
    const firstName = name.substring(0, nameSpace);
    const lastName = name.substring(nameSpace + 1);

    console.log(`Name: ${name}`);
    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
  } else {
    console.log("Error: The name must be a string");
  }
}
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");