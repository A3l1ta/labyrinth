let walls = document.querySelectorAll('div');
let glassSound = new Audio('glass.mp3');
let start = document.querySelector('#start');
let finish = document.querySelector('#finish');
let winner = document.createElement("a");

start.onclick = () => {
	document.querySelector('section').style.cursor = "cell";

	walls.forEach(wall => {
		wall.onmouseover = () => {
			glassSound.play();
			document.querySelector('#img').style.display = "block"
		}
	});

	winner.href = "congrats.html";
	finish.textContent = "";
	winner.text = "FINISH";
	finish.appendChild(winner);
};