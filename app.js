'use strict';

let affirmative = 0;

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
        affirmative ++;
    }   else if(qOne >= 10){
        alert('Unfortunately, you\'re probably not that far off!');
    }   else {
        alert('Who care\'s let\'s just impeach him!');
    }
    console.log('User chose: ' + qOne);
}
ask5();

function ask6() {
    const qTwo = prompt('Will Trump disrespect another culture tonight?');

    if(qTwo.toLowerCase() === 'yes' || qTwo.toLowerCase() === 'y'){
        alert('Pretty sad, huh?');
        affirmative ++;
    }   else if(qTwo.toLowerCase() === 'no' || qTwo.toLowerCase() === 'n') {
        alert('Let\'s agree to disagree!');
    }   else {
        alert('Two years, 11 months and 20 days to go!');
    }
    console.log('User chose: ' + qTwo);
}
ask6();

function ask7() {
    const qThree = prompt('Will Trump slur his words tonight ? ');
    if(qThree.toLowerCase() === 'yes' || qThree.toLowerCase() === 'y') {
        alert('I hope his dentures don\'t fall out on Prime Time T.V!');
        affirmative ++;
    }else if(qThree.toLowerCase() === 'no' || qThree.toLowerCase() === 'n'){
        alert('That\'s very nice of him.');
    }   else{
        alert ('Two years, 11 months and 20 days to go!');


        console.log('User chose: ' + qThree);
    }
}
ask7();

function ask8() {
    const qFour = prompt('Will Trump sound like an intelligent, qualified Leader of The Free World tonight?');
    if(qFour.toLowerCase() === 'yes' || qFour.toLowerCase === 'y'){
        alert('Let\'s watch together and argue all night.');
    }   else if(qFour.toLowerCase() === 'no' || qFour.toLowerCase() === 'n'){
        alert('Surprise, surprise');
        affirmative ++;
    }   else{
        alert('Two years, 11 months and 20 days to go!');
    }
    console.log('User chose: ' + qFour);
}
ask8();

function ask9() {
    const qFive = prompt('Will Trump be re-elected?');
    if(qFive.toLowerCase() === 'yes' || qFive.toLowerCase() === 'y'){
        alert('Hold on tight!');
    }else if(qFive.toLowerCase() === 'no' || qFive.toLowerCase() === 'n'){
        alert('Hallelujah!');
        affirmative ++;
    }else
        alert('Two years, 11 months and 20 days to go!');

    console.log('User chose: ' + qFive);
}

ask9();

const qSix = prompt('I forgot to ask  you what your name is?');
function ask10() {
    alert('Thanks, nice to meet you ' + qSix);
}

ask10();

function ask11() {
    const answer = '37';
    let qSeven = prompt(qSix + ' , can you guess what my favourite number is? ');

    for(let i = 0; i <= 3; i++){
        if(qSeven === answer){
            alert('YOURE A MIND READER!');
            affirmative ++;
            break;
        }else if(i === 3) {
            alert('Sorry ' + qSix + ' My number was 37. You are out of guesses! ');
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
}
ask11();
ask12();
//first attempt at arrays, 7th question
function ask12() {
    let question = prompt('What about trying to guess the name of one my three wives?');
    const wives = ['Geraldine', 'Bastille', 'Nancy'];

    for(let i = 0; i <= 3; i++){
        if(wives.includes(question)){
            alert('WOW, you\'re Correct ' + qSix + ' The names of my wives are: ' + wives);
            affirmative ++;
            break;
        }else
            alert('No Way, Take another guess...');
        question = prompt('What is one of my wives names?');
    }
}

alert('Congratulations ' + qSix + ', You got ' + affirmative + ' out of 7 questions correct !');