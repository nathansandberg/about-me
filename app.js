'use strict';
const question1 = prompt('What state were you born in?');
function ask1() {
    console.log('User reply: ' + question1);
    alert('You began life in ' + question1 + '!');
}
ask1();

const question2 = prompt('What city do you live in?');
function ask2() {
    console.log('User reply: ' + question2);
    alert('You began life in ' + question1 + ' and you love ' + question2 + '?');
}
ask2();

const question3 = prompt('How are you getting home?');
function ask3() {
    console.log('User reply: ' + question3);
    alert('You began life in ' + question1 + ' and you love ' + question2 + ' ?' + ' You\'re ' +  question3 + '-ing' + ' home. ');
}
ask3();

const question4 = prompt('What on earth did you eat for breakfast?');
function ask4() {
console.log('User reply: ' + question4);
alert('You began life in ' + question1 + ' and you love ' + question2 + '?' + ' You\'re ' +  question3 + '-ing' + ' home. ' + ' Really, You ate ' + question4 + '?' +  'That stuff is gonna kill you!');
}
ask4();

function ask5() {
const qOne = prompt('How many lies will Trump tell during the State of The Union address tonight?');

if (qOne <= 1 ) {
    alert('Everyone can make a mistake once');
}
else if (qOne >= 1 && qOne < 10){
    alert('I think you\'re a little generous here!');
}   else if(qOne >= 10){
    alert('Unfortunately, you\'re probably not that far off!');
}   else {
    alert('Who care\'s let\'s just impeach him!');
}
console.log('User chose: ' + qOne);
}
ask5();

function ask6through11() {
const qTwo = prompt('Will Trump disrespect another culture tonight?');

if(qTwo.toLowerCase() === 'yes' || qTwo.toLowerCase() === 'y'){
    alert('Pretty sad, huh?');
}   else if(qTwo.toLowerCase() === 'no' || qTwo.toLowerCase() === 'n') {
    alert('Let\'s agree to disagree!');
}   else {
    alert('Two years, 11 months and 20 days to go!');
}
console.log('User chose: ' + qTwo);


const qThree = prompt('Will Trump slur his words tonight ? ');
if(qThree.toLowerCase() === 'yes' || qThree.toLowerCase() === 'y') {
    alert('I hope his dentures don\'t fall out on Prime Time T.V!');
}   else if(qThree.toLowerCase() === 'no' || qThree.toLowerCase() === 'n'){
    alert('That\'s very nice of him.');
}   else{
    alert ('Two years, 11 months and 20 days to go!');


console.log('User chose: ' + qThree);
}
 

const qFour = prompt('Will Trump sound like an intelligent, qualified Leader of The Free World tonight?');
if(qFour.toLowerCase() === 'yes' || qFour.toLowerCase === 'y'){
    alert('Let\'s watch together and argue all night.');
}   else if(qFour.toLowerCase() === 'no' || qFour.toLowerCase() === 'n'){
    alert('Surprise, surprise');
}   else{
    alert('Two years, 11 months and 20 days to go!');
}
console.log('User chose: ' + qFour);

const qFive = prompt('Will Trump be re-elected?');
if(qFive.toLowerCase() === 'yes' || qFive.toLowerCase() === 'y'){
    alert('Hold on tight!');
}   else if(qFive.toLowerCase() === 'no' || qFive.toLowerCase() === 'n'){
    alert('Hallelujah!');
}   else{
    alert('Two years, 11 months and 20 days to go!');
}
console.log('User chose: ' + qFive);


//sixth question

const qSix = prompt('I forgot to ask  you what your name is?');

alert('Thanks, nice to meet you ' + qSix);

const answer = '37';
let qSeven = prompt(qSix + ' , can you guess what my favourite number is? ');

for(let i = 0; i < 4; i++){
    if(qSeven === answer){
        alert('YOURE A MIND READER!');
        break;
    }else if(qSeven < answer){
        alert('You\'re a little low, try a higher number');
        qSeven = prompt('Take another guess');
    }else if(qSeven > answer){
        alert('A bit high...maybe try a little lower');
        qSeven = prompt('Take another guess');
    }else{
        prompt('Come on! Guess a number!');
    }
}

//first attempt at arrays, 7th question

let question = prompt('Now can you guess the name of one my wives?');
const wives = ['Geraldine', 'Bastille', 'Nancy'];
for(let i = 0; i <= 5; i++){
    if(wives.includes(question)){
        alert('Correct! The names of my wives are: ' + wives);
        break;
    }else if(i === 5){
        alert('Used up all your guesses! My wives names are Geraldine, Bastille and Nancy');
        break;
    }else{
        alert('Take another shot');
        question = prompt('What is one of my wives names?');
    }}
alert('Congratulations ' + qSix + ', You got BLANK out of 7 questions correct');
}
ask6through11();



