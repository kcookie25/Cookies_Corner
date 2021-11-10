function questionOfTheDay(){
let myFirstArray = ["Email a teacher from elementary school, and thank them for all the hard work they did to help you be the person you are today", 
"Ask your teacher if they need help with anything around the classroom", 
"Check and see if another student in the class needs help with a subject you are strong in", 
"Go to CodeHS, and create a new program in the Sandbox", 
"Find a recipe, and offer to cook for your parents tonight (No, something other than hotdogs and peanut butter and jelly!)", 
"Question 6", "Question 7", "Question 8", "Question 9", "Question 10"]
// for(var i = 0; i< myFirstArray.length;i++){
//         alert(myFirstArray[i]);
// }

document.getElementById("qotd").innerText = ("Try this.... " + myFirstArray[Math.floor(Math.random() * myFirstArray.length)] )


}

//GRADE SCALE
function calculateGrade(){
let grade= document.getElementById("gradeNumber").value;
let finalGreeting;

if (grade > 89) {
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

//CHAT BOT
function openForm() {
document.getElementById("cookieChat").style.display = "block";
}

function closeForm() {
document.getElementById("cookieChat").style.display = "none";
}

document.getElementById("feeling").onclick = function(){
    document.getElementById("emoji").style.display = "block";
} 

document.getElementById("question2").onclick = function(){
    document.getElementById("calculator").style.display = "block";
} 

document.getElementById("postit").onclick = function(){
    document.getElementById("whatsnext").style.display = "block";
} 


