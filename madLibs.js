const timeOfDay = "stormy night";
const mathResult = 10 - 7;
const person = {name: "Mya", age: 27};
const place = "scary abandoned house";
const object1Owner = person.name;
let eyeColor= "red";
let creature= "tall ghost";
const whatTime = timeOfDay.includes("afternoon") ? "afternoon" : "not afternoon";
const isDark = timeOfDay.includes ("night") ? "night" : "not night";


const story = `On a ${timeOfDay}, ${object1Owner} ventured into the ${place}. The creaking walls
seemed to whisper "${object1Owner}", sending chills down her spine. Suddenly, a ${creature} appeared,
its ${eyeColor} eyes piercing through the darkness. She wondered why. ${object1Owner} was scared because it was ${whatTime}. ${object1Owner}'s heart raced as it floated
silently toward her. At age ${person.age}, she is afraid of the dark. Did you know 10 - 7 equals ${mathResult}? Spooky, right? What a ${isDark} it was.`;

document.getElementById("madlibs-output").textContent =
story;