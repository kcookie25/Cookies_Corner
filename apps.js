function questionOfTheDay(){
let myFirstArray = ["Email a teacher from elementary school, and thank them for all the hard work they did to help you be the person you are today", 
"Ask me if I need help with anything around the classroom (I am sure I do....)", 
"Check and see if another student in the class needs help with a subject you are strong in", 
"Go to CodeHS, and create a new program in the Sandbox", 
"Find a recipe, and offer to cook for your parents tonight (No, something other than hotdogs and peanut butter and jelly!)", 
"Learn a new skill by watching a tutorial on Youtube", 
"Read a book.  I have some, if you need a suggestion.", 
"Read or listen to a credible news story (Student News Daily or NewsELA are great starting points!)", 
"Build a webpage review of your favorite movie or tv show", 
"Get some exercise! (Give me 20! or power walk up and down the hallway) Let me know before you start", 
"Ask me to teach you to crochet! I have plenty of extra yarn and needles.  Yes, you will love it."]

document.getElementById("qotd").innerText = (" " + myFirstArray[Math.floor(Math.random() * myFirstArray.length)] )


}

//GRADE SCALE
function calculateGrade(){
let grade= document.getElementById("gradeNumber").value;
let finalGreeting;
if (grade == "" || grade > 100){
    finalGreeting = "Please input a number between 0 and 100";
}
else if (grade > 89) {
finalGreeting = "You get an A";
} else if (grade > 79 && grade < 90) {
finalGreeting = "You get a B!";
} else if (grade > 69 && grade < 80) {
finalGreeting = "You get a C!";
} else if (grade > 59 && grade < 70) {
finalGreeting = "You get a D!";
} else {
finalGreeting = "You get an F!"
}

document.getElementById("gradeScale").innerHTML = finalGreeting;
}

//CHAT BOT (OPEN AND CLOSE FORM OPTIONS)
function openForm() {
document.getElementById("cookieChat").style.display = "block";
}

function closeForm() {
document.getElementById("cookieChat").style.display = "none";
}

//DROP DOWN DISPLAY FOR EMOJIS
document.getElementById("feeling").onclick = function(){
    document.getElementById("emoji").style.display = "block";
} 

//DROP DOWN DISPLAY FOR GRADE CALCULATOR
document.getElementById("question2").onclick = function(){
    document.getElementById("calculator").style.display = "block";
} 

//DROP DOWN DISPLAY FOR WHAT'S NEXT?
document.getElementById("postit").onclick = function(){
    document.getElementById("whatsnext").style.display = "block";
} 






