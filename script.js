"use strict";

const Myname = `Dominick Valente`;
const age = 22;
const birthday = `September 19th`;
const detroitGC = true;

let lifeEvents = [
  "I was born in livonia",
  "I was Homeschooled",
  "On the last day of our points series race in march of 2020, I won my first race",
  "I graduated Highschool in July of 2016",
];

if (detroitGC) {
  console.log(
    `My name is ${Myname} and i am a student at Grand Circus in Detriot,Michigan. 
    I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(`My name is ${Myname} and I am a student at Grand Circus in Grand Rapids,
Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents);
  break;
}

let counter = 0;

while (true) {
  let randomnumber = Math.floor(Math.random() * 10) + 1;
  if (randomnumber !== 5) {
    counter++;
    console.log(randomnumber);
  } else {
    console.log(
      `5===5 it took ${counter} itierantions to randomly to randomly generate the number 5`
    );
    break;
  }
}
