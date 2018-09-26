const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// functions
function displayQuiz(){

}

function showResults(){

}
// submission shows results
submitButton.addEventListener('click', showResults);

var heroQuestions = [
{
	question: "Which character belongs in DC Universe?",
	answers: {
		a:"The Red Hood",
		
		b:"Spiderman",
		
		c:"Iron-Man",

		d:"The Punisher"
	},

	correctAnswer:"a"
},

{
	question: "What character is not a member of the Justice League?",
	answers: {
		a:"Superman",

		b:"James Gordon",

		c:"Damian Wayne",

		d:"Martian Man-Hunter"
	},
	correctAnswer:"b"
}

{
	question:"Which one of the Justice League founders is human?",
	answers: {
		a:"The Flash",

		b:"Green Lantern",

		c:"Cyborg",

		d:"Batman"
	},
	correctAnswer:"d"
}

{
	question: "Who is the Superman's biggest threat in Metropolis?"
	answers:{
		a:"Metallo",

		b:"Bizarro",

		c:"Lois Lane",

		d:"Lex Luthor"
	},
	correctAnswer:"d"
}

{
	question: "Why does Batman is strongly go against guns?"
	answers:{
		a:"His parents were killed by a shooter",

		b:"He cannot afford them",

		c:"He believes hand-to-hand combat shows honor",

		d:"Makes his job too easy"
	},
	correctAnswer:"a"
}

{
	question:"Who is the first Green Lantern from Earth?"
	answers:{
		a:"John Stewart",

		b:"Wally Allen",

		c:"Hal Jordan",

		d:"Tim Drake"
	},
	correctAnswer:"c"

}

{
	question:"Who is one of the few characters that actually kills Superman?"
	answers:{
		a:"Gorilla Grodd",

		b:"The Joker",

		c:"Doomsday",

		d:"Shazam"
	}
	correctAnswer:"c"
}

{
	question:"Who is the Batman's greatest foe?"
	answers:{
		a:"Two-Face",

		b:"The Joker",

		c:"Superman",

		d:"Deathstroke"
	}
	correctAnswer:"b"
}

{
	question:"Who kills Lois Lane in the 'Injustice: Gods Among Us' issue?"
	answers:{
		a:"Doomsday",

		b:"Brainiac",

		c:"The Joker",

		d:"Apokolips"
	}
	correctAnswer:"c"
}



}]