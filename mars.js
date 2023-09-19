alert('Starting your Mars Adventure!')
alert('Booting up...')
alert('All systems go!')
let username = prompt("Hi there! What's your name?")
username = username.trim()
let firstUser = username[0]
firstUser = firstUser.toUpperCase()
let otherUser = username.slice(1)
otherUser = otherUser.toLowerCase()
username = firstUser + otherUser
alert (`Hi ${username}--welcome to the Mars Adventure Game!`)
alert ('Yesterday, you received a call from your good friend at NASA')
alert ("They need someone to go to Mars this weekend, and YOU'VE been chosen!!")
let answer = prompt('Are you excited? (Type Y or N)')
answer = answer.toUpperCase()
answer = answer.trim()
if (answer.startsWith ('Y')) {
    alert("I knew you'd say that. It's so cool that you're going to Mars!")

} else if (answer.startsWith ('N')) {
    alert("Well, it's too late to back out now.")

} 
alert ("It's time to pack for your trip to Mars.")
let numSuitcases = prompt ('How many suitcases do you plan to bring?')
numSuitcases = numSuitcases.trim()
numSuitcases=Number(numSuitcases)
if (numSuitcases>2) {
    alert("That's way too many. You'll have to pack more lightly.")
} else {
    alert("Perfect. You'll certainly fit in the spaceship!")

}
alert ("You're allowed to bring two companian animnals with you.")
let companianType = prompt('What is the first kind of companion animal would you like to bring?')
companianType = companianType.trim()
let companianName = prompt("What is this companion's name?")
companianName = companianName.trim()
let firstLetter = companianName[0]
firstLetter = firstLetter.toUpperCase()
let otherLetters = companianName.slice(1)
otherLetters = otherLetters.toLowerCase()
companianName = firstLetter + otherLetters
let companianType2 = prompt('What is the second kind of companion animal would you like to bring?')
companianType2 = companianType.trim()
let companianName2 = prompt("What is this companion's name?")
companianName2 = companianName.trim()
let firstLetter2 = companianName[0]
firstLetter2 = firstLetter.toUpperCase()
let otherLetters2 = companianName.slice(1)
otherLetters2 = otherLetters.toLowerCase()
companianName2 = firstLetter + otherLetters
alert (`Cool, so you're bringing ${companianName} the ${companianType}, and ${companianName2} the ${companianType2}.`)
alert('NASA has a interior design team offering to outfit your space ship.');
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
D  Disco party
E  Barbie pink
F  Forget the rocket, I want a tricycle.
`);
let decorChoice = prompt("Type A, B, C, D, E or F")
decorChoice = decorChoice.trim()
decorChoice = decorChoice.toUpperCase()
let decor
if (decorChoice === 'A') {
decor = 'modern minimalist'
} else if (decorChoice === 'B') {
decor = 'retro'
} else if (decorChoice === 'C') {
    decor = 'Steampunk'
} else if (decorChoice === 'D') {
    decor = 'Disco'
} else if (decorChoice === 'E') {
decor = 'Barbie'
} else {

}

alert (`${username} and ${companianName}, surfing the celestial abyss, in a ${decor} spaceship. Oh, and that one ${companianType2} is there too.`)
let timer = 5
while (timer>0) {
    alert(`${timer}...`)
    timer -- 
}
alert('*** LIFTOFF ***')