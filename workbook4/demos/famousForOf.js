"use strict";

const famousPeople = [
  {
    name: "Albert Einstein",
    occupation: "Theoretical Physicist",
    knownFor: "Theory of Relativity",
    birthYear: 1879,
    deathYear: 1955,
  },
  {
    name: "Leonardo da Vinci",
    occupation: "Polymath",
    knownFor: "Mona Lisa, The Last Supper",
    birthYear: 1452,
    deathYear: 1519,
  },
  {
    name: "Marie Curie",
    occupation: "Physicist and Chemist",
    knownFor: "Radioactivity, Nobel Prizes in Physics and Chemistry",
    birthYear: 1867,
    deathYear: 1934,
  },
  {
    name: "William Shakespeare",
    occupation: "Playwright and Poet",
    knownFor: "Romeo and Juliet, Hamlet, Macbeth",
    birthYear: 1564,
    deathYear: 1616,
  },
  {
    name: "Nelson Mandela",
    occupation: "Anti-Apartheid Revolutionary and Politician",
    knownFor: "President of South Africa, Nobel Peace Prize",
    birthYear: 1918,
    deathYear: 2013,
  },
];

for (const person of famousPeople) {
  console.log(` ${person.name} was born in the year ${person.birthYear}.`);
}
