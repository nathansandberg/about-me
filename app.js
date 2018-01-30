'use strict';

const qOne = prompt('How many lies will Trump tell during the State of The Union address tonight?');

if (qOne <= 1 ) {
    alert('Everyone can make a mistake');
}
else if (qOne > 1 && qOne < 10){
    alert('I think you\'re a little generous here!');
}   else if(qOne > 10){
    alert('Unfortunately, you\'re probably not that far off!');
}   else {
    alert('Who care\'s let\'s just impeach him!');
}
console.log('User choose: ' + qOne);

const qTwo = prompt('Will Trump disrespect another culture tonight?');

if(qTwo === 'yes'){
    alert('Pretty sad, huh?');
}   else if(qTwo === 'no') {
    alert('Let\'s agree to disagree!');
}   else {
    alert('Two years, 11 months and 20 days to go!');
}
console.log('User choose: ' + qTwo);

const qThree = prompt('Will Trump slur his words tonight ? ');
if(qThree === 'yes') {
    alert('I hope his dentures don\'t fall out on Prime Time T.V!');
}   else if(qThree === 'no'){
    alert('That\'s nice of him.');
}   else{
    alert ('Two years, 11 months and 20 days to go!');
}

console.log('User choose: ' + qThree);

const qFour = prompt('Will Trump sound like an intelligent, qualified Leader of The Free World tonight?');
if(qFour === 'yes'){
    alert('Let\'s watch together and argue all night.');
}   else if(qFour === 'no'){
    alert('Surprise, surprise');
}   else{
    alert('Two years, 11 months and 20 days to go!');
}
console.log('User choose: ' + qFour);

const qFive = prompt('Will Trump be re-elected?');
if(qFive === 'yes'){
    alert('Hold on tight!');
}   else if(qFive === 'no'){
    alert('Hallelujah!')
}   else{
    alert('Two years, 11 months and 20 days to go!');
}
console.log('User choose: ' + qFive);










/*
const name = prompt('What is your name?');
console.log('their name is: ' + name);

if (name.toLowerCase() === 'louis') {
    alert('Louis! You\'re the best!');
}


const likesFries = confirm('Do you like french fries?');
console.log('likes fries: ' + likesFries);

if (likesFries) {
    // TODO if they like fries, ask who has the best fries: LBB or Burgerville
    // TODO allow them to enter "lbb" or "LBB" or "Little Big Burger"
    // TODO give different responses based on their selection
    alert('Me, too!');
} else {
    alert('Sad face.');
}



const question1 = prompt('What state were you born in?');
console.log('User reply: ' + question1);
alert('You began life in ' + question1 + '!');


const question2 = prompt('What city do you live in?');
console.log('User reply: ' + question2);
alert('You began life in ' + question1 + ' and you love ' + question2 + '?');

const question3 = prompt('How are you getting home?');
console.log('User reply: ' + question3);
alert('You began life in ' + question1 + ' and you love ' + question2 + ' ?' + ' You\'re ' +  question3 + '-ing' + ' home. ');

const question4 = prompt('What on earth did you eat for breakfast?');
console.log('User reply: ' + question4);
alert('You began life in ' + question1 + ' and you love ' + question2 + '?' + ' You\'re ' +  question3 + '-ing' + ' home. ' + ' Really, You ate ' + question4 + " ? " + " That stuff is gonna kill you!");
*/