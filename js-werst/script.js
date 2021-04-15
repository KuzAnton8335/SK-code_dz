window.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.text').forEach(function (domElement) {
		domElement.classList.add('alert')
	})

	console.log(document.getElementsByTagName('p'));
	// console.log(document.querySelectorAll('p'));
});

