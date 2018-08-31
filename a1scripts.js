// Question objects
function question(text,type,responses,ans,wrong) 
{
    this.text = text;
    this.type = type;
    this.responses = responses;
    this.ans = ans;
    this.wrong = wrong;
}

var q1 = new question("Did Adam take CS 1102?","tf",
		      ["True","False"],"True",
		      "Nope, I did freshman year");
var q2 = new question("Did Adam take CS 2301?","tf",["True","False"],"False", "Nope, I took 2303");
var q3 = new question("Did Adam take CS 3431?","tf",["True","False"],"True", "Yep, I did junior year");
var q4 = new question("Did Adam take CS 4432?","tf",["True","False"], "False", "Nope, I didn't");
var q5 = new question("What was Adam's favorite CS course as of Aug 2018?","multi",
		      ["CS 1102","CS 2102","CS 3733","CS 4341"],
		      "CS 4341", "Nope, it was Soft. Eng. with Prof. Heineman");
var q6 = new question("What is Adam minoring in?","multi",
		      ["Spanish","Data Science","English","ECE"],"Spanish", 
		      "Nope, I'm minoring in Spanish");
var q7 = new question("What is Adam's executive role on the WPI sailing team?","multi",
		      ["Rear Commodore","Treasurer","Commodore","Vice Commodore"], "Vice Commodore", "Nope, I'm the vice commodore (VP)");
var q8 = new question("What year is Adam?","multi",["Sophomore","Junior","Senior","Super Senior"], "Senior", "Nope, I'm a senior");
var q9 = new question("Does Adam play the guitar?","tf",["True","False"], "True", "Yep, I do");
var q10 = new question("What was Adam's first prog. language?","multi",
		       ["Java","FORTRAN","C","Brainfuck"],"Java","No, it was Java");

var questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
var usedQuestions = [];
var activeQuestion;
var resetting = false;

var panel = document.getElementById('question-panel');
var button = document.getElementById('submit');

button.onclick = 
    function () {
	hideButtons();
	// Checks before question appears
	if (resetting) // Reset after all questions done
	    resetSubmit();
	if (panel.classList.contains('active')) { // reset animation 
	    console.log("Active detected");
	    panel.classList.remove('active'); 
	}
	// Check if all questions completed
	if (!questions.length) {
	    panel.innerHTML = "You've completed all questions!";
	    panel.classList.add('active');
	    changeSubmit();
	    return;
	}
	
	// Actual question
	panel.classList.add('active'); // Make question div visible
	randIndex = Math.floor(Math.random() * (questions.length)); // Pick random question
	activeQuestion = questions[randIndex];
	panel.innerHTML = questions[randIndex].text; // Fill question div
	if (questions[randIndex].type === "tf") {
	    console.log("tf show");
	} else { 
	    console.log("multi show");
	}
	showButtons(questions[randIndex]);

	usedQuestions.push(questions[randIndex]);
	questions.splice(randIndex,1);
	console.log(questions);
	console.log(usedQuestions);
    };

function showButtons(question) {
    if (question.type === "tf") {
	document.getElementById("choice-true").style.display = "inline";
	document.getElementById("choice-true").innerHTML = "True";
	document.getElementById("choice-false").style.display = "inline";
	document.getElementById("choice-false").innerHTML = "False";
    } else { 
	document.getElementById("choice1").style.display = "inline";
	document.getElementById("choice1").innerHTML = question.responses[0];
	document.getElementById("choice2").style.display = "inline";
	document.getElementById("choice2").innerHTML = question.responses[1];
	document.getElementById("choice3").style.display = "inline";
	document.getElementById("choice3").innerHTML = question.responses[2];
	document.getElementById("choice4").style.display = "inline";
	document.getElementById("choice4").innerHTML = question.responses[3];
    }
}

function hideButtons() {
    document.getElementById("choice-true").style.display = "none";
    document.getElementById("choice-false").style.display = "none";
    document.getElementById("choice1").style.display = "none";
    document.getElementById("choice2").style.display = "none";
    document.getElementById("choice3").style.display = "none";
    document.getElementById("choice4").style.display = "none";
}

function changeSubmit() {
    button.innerHTML='Go Again!';
    resetting = true;
}
function resetSubmit() {
    button.innerHTML='New Question';
    questions = usedQuestions;
    usedQuestions = [];
    resetting = false;
    panel.classList.remove('active');   
}

document.getElementById('choices').onclick=function(e) {
    if (e.target.innerHTML !== activeQuestion.ans) {
	alert(activeQuestion.wrong);
    } else {
	alert("Correct!");
    }
}


