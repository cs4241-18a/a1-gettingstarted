var questions = ["Qasdfas1", "Qasdfasdf2", "Qsfasdfsa3", "Qfasdfasdf4", "Qfasdf5", "Qfasdfasd6", "Qfasdfsaf7", "Qfdsafsdf8"];
var usedQuestions = [];
var resetting = false;

var panel = document.getElementById('question-panel');
var button = document.getElementById('submit');

button.onclick = 
    function () {
	if (resetting) 
	    resetSubmit();
	if (panel.classList.contains('active')) {
	    console.log("Active detected");
	    panel.classList.remove('active'); 
	    return;
	}

	if (!questions.length) {
	    panel.innerHTML = "You've completed all questions!";
	    panel.classList.add('active');
	    changeSubmit();
	    return;
	}
	
	panel.classList.add('active');
	randIndex = Math.floor(Math.random() * (questions.length));
	panel.innerHTML = questions[randIndex];

	usedQuestions.push(questions[randIndex]);
	questions.splice(randIndex,1);
	console.log(questions);
	console.log(usedQuestions);
    };

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

