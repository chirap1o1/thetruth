function openDoor() {
	document.querySelector('.door').classList.add('opened');
}

function closeDoor() {
	document.querySelector('.door').classList.remove('opened');
}

document.querySelector('#no-button').addEventListener('click', function() {
	document.querySelector('#no-button').classList.add('move-out');
});
