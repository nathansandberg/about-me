//First attempt at typing notes. Hoping I can keep up

//helper functions should be grouoped towards the bottom of the .js doc. Their order is un-important but the order
 in which they are called is CRITICAL. 
 //Function calls, console.logs and variables are listed towards the top of the .js

//"variables are like our nouns, functions are our verbs" 
// "name functions as if they were verbs"
// all variables are scoped to the function they are defined inside of

function shout(word){
const allCapsWord = word.toUpperCase();
}

//no allCapsWord defined outside of variable. Confined to function
//to get anything out of your function you need to return it...
f
unction shout(word){
const allCaps = word.toUpperCase();
return allCaps
}
shout('YO!')
//"YO!"

CODE REVIEW: 
//put qustions and answers into separate arrays
//don't be afraid to make MANY variabls or have VERY long arrays....


//HTML & CSS
images, figures, positioning html elements...
<img src = "" alt="screenreadertext" width="" height="" title="tooltip on hover">

?? Does CSS overrule a width/height img html attribute???

To provide more info specific to an image use <figure>
<figure>
<img>
<canvas> ???
<code>???
<figcaption>
</figure>

//editing pictures in css: 

target a specific image in a figure that is in an aside:
aside figure img{
    width: 100%;

}

To get an aside, section and another aside to sit side by side
display: inline-block;
vertical-align: top; (align across top)

position is similar to display in terms of where an element sits...
position: static, relative, absolute, fixed, sticky, (default)

position: relative differs from static because we can give it top, left, bottom, right values..
position: fixed removes an element from page flow and locks it into a position


<time> can be used to dispay the current time ???? (or does it just tell the browser you are giving a time/date?)

To fix nav at top of page: 
give header that contains <nav>, position: fixed

z-index: The lower the number the closer to the front the element will appear

position: sticky will allow an element to scroll until a certain point at which it will become sticky

FLEXBOX: Helpful when positioning elements in relation to one another. 
To make items display FLEX give flex display to parent element
display: flex;
Flex arranges things horizontally (no need for display: inline block) Also don't need to use margins, padding to space things out. 
Can space out based on width of container
justify-content: flex end (moves to end of acitve axis) move things left and right
justify-content: space around; space between;
align items: flex-start;
height: 100px;

??? CSS GRID ?????

//Don't forget about the a(alpha) in rgba and hsla Alpha value between 1-0 affects opacity

To deploy to WWW: 
be in master branch
move to git-demo repo on github. Commit so it's part of timeline

why move to it's own repo: the way we publish is by repo. Can publish an entire repo as a website
in repo, in terminal create a new branch 'gh-pages' ANything you push to this branch will be published
git push origin gh-pages

in browswer username.github.io/git-demo/

create a branch called github branches and pushing to github

sum()


multiply()

sumAndMultiply()

sumArray()

multiplyArray()

create a new branch for each problem. Merge them in master. Pull down to local client. 
