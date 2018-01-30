/*'use strict';

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

*/

const question1 = prompt('What state were you born in?');
console.log('User reply: ' + question1);
alert("You began life in " + question1 + "!");


const question2 = prompt('What city do you live in?');
console.log('User reply: ' + question2);
alert("You began life in " + question1 + ' and you love ' + question2 + "?");

const question3 = prompt('How are you getting home?');
console.log('User reply: ' + question3);
alert("You began life in " + question1 + ' and you love ' + question2 + "?" + ' You\'re ' +  question3 + "-ing" + ' home. ');

const question4 = prompt('What on earth did you eat for breakfast?');
console.log('User reply: ' + question4);
alert('You began life in ' + question1 + ' and you love ' + question2 + '?' + ' You\'re ' +  question3 + "-ing" + ' home. ' + ' Really, You ate ' + question4 + " ? " + " That stuff is gonna kill you!");